import React from 'react';
import './App.css';
import User from './UserComponent';

// function App() {
//   const [user, setUser] = React.useState(null);
//   const [error, setError] = React.useState('');

//   // React.useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/users/1')
//   //     .then((response) => response.json())
//   //     .then((user) => setUser(user))
//   //     .catch((error) => setError(error.message));
//   // }, []);

//   window.fetch = jest.fn(() => {
//     const user = { name: 'Jack', email: 'jack@email.com' };
  
//     return Promise.resolve({
//       json: () => Promise.resolve(user),
//     });
//   });

//   if (error) {
//     return <span>{error}</span>;
//   }

//   return <div>{user ? <User user={user} /> : <span>Loading...</span>}</div>;
// } 


function App() {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter((prevCounter) => ++prevCounter);
  };

  const decrement = () => {
    setCounter((prevCounter) => --prevCounter);
  };

  return (
    <div>
      <h2 data-testid="counter">{counter}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App; 



