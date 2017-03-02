import React from 'react';
import Query  from "../../../shared/actions/Query";
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureMockStore([ thunk ]);

describe('Query Actions', () => {

    let newQuery;
    beforeEach(() =>{
        newQuery = new Query("http://domain.net");
        moxios.install();
    });

    afterEach(() =>{
        moxios.uninstall();
    });

    it('Query constructs correctly', () => {
        expect(newQuery).toBeDefined();
    });

    it('Query constructor needs a domain', () => {
        expect(
            () => { new Query(); }
        ).toThrow("Query needs a domain");
    });

    it('Query runQuery needs a name', () => {
        expect(
            () => { newQuery.runQuery() }
        ).toThrow("A query needs a name");
    });

    it('Query runQuery needs an action', () => {
        expect(
            () => { newQuery.runQuery("testName") }
        ).toThrow("A query needs an action");
    });

    it('Query runQuery returns a function', () => {
        let result = newQuery.runQuery("TestQuery", "test/action");
        expect(result).toBeInstanceOf(Function);
    });

    it('Query runQuery returns expected dispatch on a good call', () => {
        let result = newQuery.runQuery("TestQuery", "test/action");
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {data: "testData"}
            });
        });
        const store = mockStore();
        return store.dispatch(result).then(
            () => {
                let result = store.getActions();
                expect(result).toHaveLength(2);
                expect(result[0].type).toEqual("QUERY_PENDING");
                expect(result[1].type).toEqual("QUERY_FULFILLED");
                expect(result[1].payload).toEqual({
                    name: 'TestQuery',
                    data: {data: "testData"}
                });
            }
        );
    });

    it('Query runQuery returns expected dispatch on a good call', () => {
        let result = newQuery.runQuery("TestQuery", "test/action");
        moxios.wait(() => {
            let request = moxios.requests.mostRecent();
            request.respondWith({
                status: 404,
                response: {data: "testData"}
            });
        });
        const store = mockStore();
        return store.dispatch(result).then(
            () => {
                let result = store.getActions();
                expect(result).toHaveLength(2);
                expect(result[0].type).toEqual("QUERY_PENDING");
                expect(result[1].type).toEqual("QUERY_REJECTED");
                expect(result[1].payload).toEqual({
                    name: 'TestQuery',
                    data: new Error("Request failed with status code 404")
                });
            }
        );
    });

});