import React from 'react';
import { mount } from 'enzyme';

import Main from '../../pages/Main';
import ToolList from '../../components/ToolList';

const tools = [
  {
    id: 1,
    title: 'Notion',
    link: 'https://notion.so',
    description:
      'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
    tags: ['organization', 'planning', 'collaboration', 'writing', 'calendar'],
  },
];

describe('ToolList Component', () => {
  const wrapperToolList = mount(
    <ToolList
      tools={tools}
      toolSearchTextInput=""
      toolSearchCheckInput={false}
      handleToggleModalRemove={() => {}}
    />
  );

  it('should render able to tool list', () => {
    expect(wrapperToolList.find('div#toolList').length).toBe(tools.length);
  });

  describe('when the button removeTool is clicked', () => {
    it('calls the `handleToggleModalRemove` function', () => {
      const wrapperMain = mount(
        <Main>
          <ToolList
            tools={tools}
            toolSearchTextInput=""
            toolSearchCheckInput={false}
            handleToggleModalRemove={() => {}}
          />
        </Main>
      );
      wrapperMain.setState({
        tools: [
          {
            id: 1,
            title: 'Notion',
            link: 'https://notion.so',
            description:
              'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
            tags: [
              'organization',
              'planning',
              'collaboration',
              'writing',
              'calendar',
            ],
          },
        ],
      });
      // console.log(wrapperMain.debug());
      const handleToggleModalRemove = jest.spyOn(
        wrapperMain.instance(),
        'handleToggleModalRemove'
      );

      wrapperMain.update();
      wrapperMain.instance().forceUpdate();

      const button = wrapperMain.find(
        'ToolList div#toolList button#removeTool'
      );
      button.simulate('click');
      expect(handleToggleModalRemove).toHaveBeenCalled();
    });
  });
});
