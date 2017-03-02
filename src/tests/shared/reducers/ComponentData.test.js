import React from 'react';
import ComponentData  from "../../../shared/reducers/ComponentData";

describe('ComponentData Actions', () => {

    it('ComponentData reducer returns default state correctly', () => {
        let result =  ComponentData({default: 'test'});
        expect(result).toEqual({default: 'test'});
    });

    it('ComponentData reducer returns SET_COMPONENT state correctly', () => {
        let result =  ComponentData({}, {type: "SET_COMPONENT", payload: {name: "TestName", data: "TestData"} });
        expect(result).toEqual({
            "TestName": "TestData"
        });
    });

});