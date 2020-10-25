import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form />, div);
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Form />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
