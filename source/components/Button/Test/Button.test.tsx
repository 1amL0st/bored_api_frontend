import React from 'react';
import * as renderer from 'react-test-renderer';
import { Button } from '../Button';

describe('Components: Button test', () => {
  test('First test', () => {
    const component = renderer.create(<Button>Facebook</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Second test', () => {
    const component = renderer.create(
      <Button>
        <p>Some text here</p>
      </Button>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
