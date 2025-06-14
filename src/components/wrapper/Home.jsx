import React from 'react';

const Home = () => (
  <div>
    <h1>Thinking In React</h1>
    <p className="mb-4">
      A walk through the thought process of building simple apps using React blog post '
      <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank" rel="noopener noreferrer">
        Thinking in React
      </a>
      ' concept.
    </p>

    <h3 className="mb-4">Steps</h3>
    <ul className="mb-4">
      <li className="mb-2">Start With A Mock</li>
      <li className="mb-2">Break The UI Into A Component Hierarchy</li>
      <li className="mb-2">Build A Static Version in React</li>
      <li className="mb-2">Identify The Minimal (but complete) Representation Of UI State</li>
      <li className="mb-2">Identify Where Your State Should Live</li>
      <li className="mb-2">Add Inverse Data Flow</li>
    </ul>
    <p>Please click on the project links on left to view them in action.</p>
  </div>
);

export default Home;
