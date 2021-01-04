import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './index';

describe('My Test', () => {
  test('Button test', () => {
    const component = renderer.create(<Button>Button</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Button with child div', () => {
    const component = renderer.create(
      <Button>
        <div>Hello</div>
      </Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
