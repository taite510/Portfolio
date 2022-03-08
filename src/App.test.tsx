import * as React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

jest.mock('./components/ConfigContext');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the About section on clicking the about button', async () => {
  const {getByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('About').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getByText('About'))
  expect(getByTestId('About').style['_values' as any]['width' as any]).toEqual('0px');
})

it('renders the Hobbies section on clicking the about button', async () => {
  const {getAllByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('Hobbies').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getAllByText('Hobbies')[0])
  expect(getByTestId('Hobbies').style['_values' as any]['width' as any]).toEqual('0px');
})

it('renders the Projects section on clicking the about button', async () => {
  const {getAllByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('Projects').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getAllByText('Projects')[0])
  expect(getByTestId('Projects').style['_values' as any]['width' as any]).toEqual('0px');
})

it('renders the Resume section on clicking the about button', async () => {
  const {getAllByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('Resume').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getAllByText('Resume')[0])
  expect(getByTestId('Resume').style['_values' as any]['width' as any]).toEqual('0px');
})