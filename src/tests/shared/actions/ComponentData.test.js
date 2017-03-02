import React from 'react';
import ComponentData  from "../../../shared/actions/ComponentData";

describe('ComponentData Actions', () => {
    let dispatch;
    beforeEach(() => {
        dispatch = jest.fn();
    });

    it('ComponentData constructs correctly', () => {
        let newComp = new ComponentData("TestName", dispatch);
        expect(newComp).toBeDefined();
    });

    it('ComponentData constructor needs a name', () => {
        expect(
            () => { new ComponentData(null, dispatch) }
        ).toThrow("ComponentData needs a name");
    });

    it('ComponentData constructor needs a dispatcher function', () => {
        expect(
            () => { new ComponentData("TestName", null) }
        ).toThrow("ComponentData needs a dispatcher");
    });

    it('ComponentData setComponent dispatches a clone', () => {
        let newComp = new ComponentData("TestName", dispatch);
        newComp.setComponent();
        expect(dispatch.mock.calls[0][0].payload.data).not.toBe(newComp);
    });

    it('ComponentData setComponent dispatches a clone with updated variables', () => {
        let newComp = new ComponentData("TestName", dispatch);
        newComp.setComponent({test: "test"});
        let clone = dispatch.mock.calls[0][0].payload.data;
        expect(dispatch.mock.calls[0][0].payload.data).not.toBe(newComp);
        expect(clone.test).toEqual("test");
    });

});