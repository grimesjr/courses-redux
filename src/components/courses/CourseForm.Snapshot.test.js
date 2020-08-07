import React from 'react';
import CourseForm from './CourseForm';
import renderer from 'react-test-renderer';
import { courses, authors } from '../../../tools/mockData';

it("sets submit button 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      errors={{}}
      saving
    />
  );
  expect(tree).toMatchSnapshot();
});

it("sets submit button 'Save...' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      course={courses[0]}
      authors={authors}
      onSave={jest.fn()}
      onChange={jest.fn()}
      errors={{}}
      saving={false}
    />
  );
  expect(tree).toMatchSnapshot();
});
