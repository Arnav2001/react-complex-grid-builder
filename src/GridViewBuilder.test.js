//GridViewBuilder.test.js

jest.mock('./GridViewBuilder.css', () => ({ classes: {} })); // Mock the CSS module


import React from 'react';
import { render, screen } from '@testing-library/react';
import GridViewBuilder from './GridViewBuilder.jsx';

const testData = [
  {
    coverImg: 'https://via.placeholder.com/150',
    heading: 'Test Heading 1',
    writer: 'Author 1',
    date: '2024-06-01',
  },
  {
    coverImg: 'https://via.placeholder.com/150',
    heading: 'Test Heading 2',
    writer: 'Author 2',
    date: '2024-06-02',
  },
];

describe('GridViewBuilder', () => {
  test('renders without crashing', () => {
    render(<GridViewBuilder data={testData} />);
  });

  test('renders correct number of elements', () => {
    render(<GridViewBuilder data={testData} />);
    expect(screen.getAllByClassName('gridDiv1').length).toBe(1);
    expect(screen.getAllByClassName('gridDiv2').length).toBe(1);
  });

  test('displays the correct heading and writer', () => {
    render(<GridViewBuilder data={testData} />);
    expect(screen.getByText('Test Heading 1')).toBeInTheDocument();
    expect(screen.getByText('Author 1')).toBeInTheDocument();
    expect(screen.getByText('Test Heading 2')).toBeInTheDocument();
    expect(screen.getByText('Author 2')).toBeInTheDocument();
  });

  test('displays the correct date', () => {
    render(<GridViewBuilder data={testData} />);
    expect(screen.getByText('2024-06-01')).toBeInTheDocument();
    expect(screen.getByText('2024-06-02')).toBeInTheDocument();
  });
});

