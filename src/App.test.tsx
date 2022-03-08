import * as React from 'react';
import ReactDOM from 'react-dom';
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react';
import App from './App';

afterEach(cleanup);

jest.mock('./components/ConfigContext');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the About section on clicking the about button', () => {
  const {getByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('About').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getByText('About'))
  expect(getByTestId('About').style['_values' as any]['width' as any]).toEqual('0px');
})

it('renders the Hobbies section on clicking the about button', () => {
  const {getAllByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('Hobbies').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getAllByText('Hobbies')[0])
  expect(getByTestId('Hobbies').style['_values' as any]['width' as any]).toEqual('0px');
})

it('renders the Projects section on clicking the about button', () => {
  const {getAllByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('Projects').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getAllByText('Projects')[0])
  expect(getByTestId('Projects').style['_values' as any]['width' as any]).toEqual('0px');
})

it('renders the Resume section on clicking the about button', () => {
  const {getAllByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('Resume').style['_values' as any]['width' as any]).toBeFalsy();
  fireEvent.click(getAllByText('Resume')[0])
  expect(getByTestId('Resume').style['_values' as any]['width' as any]).toEqual('0px');
})

test('clicking home button collapses the current open section', async () => {
  const {getAllByText, getByText, getByTestId} = render(
    <App />,
  );
  expect(getByTestId('Resume').classList.value.split(' ')[2]).toEqual('MuiCollapse-hidden');
  fireEvent.click(getAllByText('Resume')[0])
  await waitFor(() => {
    expect(getByTestId('Resume').classList.value.split(' ')[2]).toEqual('MuiCollapse-entered');
  })
  fireEvent.click(getByText('Home'))
  await waitFor(() => {
    expect(getByTestId('Resume').classList.value.split(' ')[2]).toEqual('MuiCollapse-hidden');
  })
})