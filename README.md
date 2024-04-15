# React Carousel Component

## Overview

The `Carousel` component is a flexible and reusable React component for creating carousels. It allows you to display a list of JSX elements, like images, with options to navigate through the items using "Next" and "Prev" buttons. Additionally, the component comes with slide-in and slide-out animations.

## Features

- **Slide Animation**: Includes slide-in and slide-out animations for a better user experience.
- **Items Per Slide**: Customize the number of items displayed per slide.
- **Dimensions**: Set maximum height and width for the items displayed in the carousel.
- **Styling**: Provides CSS classes for easy customization and styling.

## Installation

1. Download both `Carousel.js` and its associated `Carousel.css` files.
2. Place them into your project's appropriate directory.

## Usage

Here is a basic example to demonstrate how to integrate the Carousel component into a React application.

```jsx
import React from 'react';
import './App.css';
import Carousel from './path/to/Carousel';

const MyComponents = [
  <img src="https://example.com/image1.jpg" alt="Item 1" />,
  <img src="https://example.com/image2.jpg" alt="Item 2" />,
  // ... More JSX elements can be added here
];

function App() {
  return (
    <div className="App">
      <Carousel
        style={{ height: "350px" }}
        content={MyComponents}
        itemsPerSlide={4}
        title="A Good Title Here"
        maxWidth="200px"
        maxHeight="200px"
      />
    </div>
  );
}
```

## Props

- `content` (Array): An array of JSX elements to be displayed in the carousel.
- `itemsPerSlide` (Number): Number of items to be displayed per slide.
- `title` (String, optional): An optional title for the carousel.
- `maxWidth` (String, optional): Maximum width for the carousel items. e.g., `"200px"`
- `maxHeight` (String, optional): Maximum height for the carousel items. e.g., `"200px"`
- `style` (Object, optional): An optional style object to customize the carousel container.

## License

MIT License