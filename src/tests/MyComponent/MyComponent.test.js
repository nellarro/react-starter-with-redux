import React from 'react';
import { shallow } from 'enzyme';
import { MyComponent, mapStateToProps } from '../../MyComponent/MyComponent';


describe('<MyComponent />', () => {

    let wrapper;
    let props;
    let dispatch;
    let mappedProps;
    beforeEach(() => {
        mappedProps = mapStateToProps({});
        dispatch = jest.fn();
        props = {
            ...mappedProps,
            dispatch
        };
        wrapper = shallow(
            <MyComponent {...props} />
        );
    });
    it('should pass', () => {
        expect(true).toEqual(true);
    });
});
