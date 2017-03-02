import React from 'react';
import Query  from "../../../shared/reducers/Query";

describe('Query Actions', () => {

    it('Query reducer returns default state correctly', () => {
        let result =  Query({default: 'test'});
        expect(result).toEqual({default: 'test'});
    });

    it('Query reducer returns pending state correctly', () => {
        let result =  Query({}, {type: "QUERY_PENDING", payload: {name: "TestName"} });
        expect(result).toEqual({
            "TestName": {
                "error": null,
                "fetched": false,
                "fetching": true,
                "response": null
            }
        });
    });

    it('Query reducer returns fulfilled state correctly', () => {
        let result =  Query({}, {type: "QUERY_FULFILLED", payload: {name: "TestName", data: "TestData"} });
        expect(result).toEqual({
            "TestName": {
                "error": null,
                "fetched": true,
                "fetching": false,
                "response": "TestData"
            }
        });
    });

    it('Query reducer returns fulfilled state correctly', () => {
        let result =  Query({}, {type: "QUERY_REJECTED", payload: {name: "TestName", data: "TestData"} });
        expect(result).toEqual({
            "TestName": {
                "error": "TestData",
                "fetched": true,
                "fetching": false,
                "response": null
            }
        });
    });

});