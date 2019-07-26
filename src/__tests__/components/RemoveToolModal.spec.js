import React from 'react';
import { mount } from 'enzyme';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

import RemoveToolModal from '../../components/RemoveToolModal';

const apiMock = new MockAdapter(api);

describe('when the button removeButton is clicked', () => {
  const wrapper = mount(
    <RemoveToolModal
      modal
      handleToggleModalRemove={() => {}}
      handleSearchApi={() => {}}
      toolIdToRemove={0}
      toolTitleToRemove=""
    />
  );
  // console.log(wrapper.debug());
  const submitForm = jest.spyOn(wrapper.instance(), 'submitForm');

  wrapper.update();
  wrapper.instance().forceUpdate();

  const button = wrapper.find('button#removeButton');

  const mockData = {};

  beforeEach(() => {
    apiMock.onDelete('/tools/1').reply(200, mockData);
    button.simulate('submit');
  });

  it('calls the `submitForm` function', () => {
    expect(submitForm).toHaveBeenCalled();
  });

  it('sets the `state.success` get from the DELETE request', () => {
    // expect(apiMock.history).toHaveBeenCalled();
  });
});
