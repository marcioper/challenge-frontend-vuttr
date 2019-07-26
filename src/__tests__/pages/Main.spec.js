import React from 'react';
import { mount } from 'enzyme';

import Main from '../../pages/Main';

describe('Main page', () => {
  it('should render Main page', () => {
    const wrapper = mount(<Main />);
    expect(wrapper.contains(<h1 className="topo">VUTTR</h1>)).toBe(true);
    expect(
      wrapper.contains(<h2 className="topo">Very Useful Tools to Remember</h2>)
    ).toBe(true);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper.find('input.form-control').exists()).toBe(true);
    expect(wrapper.find('input.form-check-input').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  describe('when the input search is changed', () => {
    it('calls the `handleSearch` function', () => {
      const wrapper = mount(<Main />);
      const event = { target: { name: 'search', value: 'node' } };

      const spy = jest.spyOn(wrapper.instance(), 'handleSearch');
      wrapper.find('input.form-control').simulate('change', event);
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('when the button addToolModal is clicked', () => {
    it('calls the `handleToggleModalAdd` function', () => {
      const wrapper = mount(<Main />);
      const handleToggleModalAdd = jest.spyOn(
        wrapper.instance(),
        'handleToggleModalAdd'
      );

      wrapper.update();
      wrapper.instance().forceUpdate();

      const button = wrapper.find('button#addToolModal');
      button.simulate('click');
      expect(handleToggleModalAdd).toHaveBeenCalled();
    });
  });
});
