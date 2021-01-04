import React from 'react';
import renderer from 'react-test-renderer';

import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IconButton } from './index';

describe('IconButton tests', () => {
  test('FirstTest', () => {
    const component = renderer.create(
      <IconButton>
        <FontAwesomeIcon icon={Icons.faPlus}></FontAwesomeIcon>
      </IconButton>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
