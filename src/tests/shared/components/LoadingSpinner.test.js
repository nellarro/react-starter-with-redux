import React from 'react';
import { shallow } from 'enzyme';
import { LoadingSpinner } from '../../../shared/components/LoadingSpinner';

describe('LoadingSpinner Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LoadingSpinner />);
    });

    it('LoadingSpinner is contructed correctly', () => {
        expect(wrapper.html()).toEqual('<div class="loading-animation"><img src="loading.svg" class="center-block" alt="loading"/></div>');
    });
});