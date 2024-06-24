# react-complex-grid-builder

This is a package made to help you build complex grid structures for blogs, galleries, etc.

## Installation

You can install this package using npm:

```bash
npm i react-complex-grid-builder

Usage
Here is an example of how to use the GridViewBuilder component in a React application:
import './App.css';
import { GridViewBuilder } from 'react-complex-grid-builder';

function App() {
  const data = [
    {
      coverImg: "https://www.adobe.com/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium",
      heading: "This is the first heading",
      writer: "John Doe",
      date: "2024-06-25",
    },
    {
      coverImg: "https://www.adobe.com/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium",
      heading: "This is the second heading",
      writer: "Jane Smith",
      date: "2024-06-25",
    },
    {
      coverImg: "https://www.adobe.com/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium",
      heading: "This is the third heading",
      writer: "Alice Brown",
      date: "2024-06-25",
    },
    {
      coverImg: "https://www.adobe.com/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium",
      heading: "This is the fourth heading",
      writer: "Bob Johnson",
      date: "2024-06-25",
    },
    {
      coverImg: "https://www.adobe.com/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium",
      heading: "This is the fifth heading",
      writer: "Charlie Miller",
      date: "2024-06-25",
    },
    {
      coverImg: "https://www.adobe.com/products/firefly/features/media_1cc035824a5dbf414f18a55ef622e86cc51684dd5.png?width=750&format=png&optimize=medium",
      heading: "This is the sixth heading",
      writer: "David Williams",
      date: "2024-06-25",
    },
  ];
  
  return (
    <div className="">
      <GridViewBuilder data={data} />
    </div>
  );
}

export default App;

Props
The GridViewBuilder component expects the following props:

data: An array of objects representing the grid items. Each object should have the following structure:
coverImg (string): URL of the cover image.
heading (string): Heading text.
writer (string): Writer's name.
date (string): Date in YYYY-MM-DD format.

License
This project is licensed under the MIT License.
