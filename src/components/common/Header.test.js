import React from 'react';
import Header from './Headers';
import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

it('contains 3 anchors via mount', () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find('a').length;

  expect(numAnchors).toEqual(3);
});
