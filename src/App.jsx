import React from 'react';
import './index.css';
import { Form } from 'react-bootstrap';

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Image Search</h1>
      <div className="search-section">
        <Form>
          <Form.Control
            type="search"
            placeholder="Type something to search..."
            className="search-input"
          />
        </Form>
      </div>
    </div>
  );
};

export default App;
