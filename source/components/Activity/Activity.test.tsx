import React from 'react';
import renderer from 'react-test-renderer';

import { Activity } from './index';
import { IActivity } from 'api';

describe('My Test', () => {
  test('Activity test', () => {
    const activity: IActivity = {
      name: 'Learn somethin new',
      type: 'education',
      accessibility: 30,
      participants: 20,
      price: 10,
      addDate: new Date(),
    };
    const component = renderer.create(
      <Activity isSelected={false} activity={activity} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
