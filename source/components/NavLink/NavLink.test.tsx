import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';

import { NavLink } from './index';

describe('NavLink component tests', () => {
  test('Plain text as child', () => {
    const component = renderer.create(
      <BrowserRouter>
        <NavLink to="somewhere">Button</NavLink>
      </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Div as child', () => {
    const component = renderer.create(
      <BrowserRouter>
        <NavLink to="somewhere">
          <div>Hello</div>
        </NavLink>
      </BrowserRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
