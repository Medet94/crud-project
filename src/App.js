import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsersFromServer } from './redux/slices/userSlice';
import { increment, decrement } from './redux/slices/counterSlice';
import { BeatLoader } from 'react-spinners';
import './App.css';

const App = () => {
  const users = useSelector((state) => state.users.users);
  const count = useSelector((state) => state.counter.count);
  const isLoading = useSelector((state) => state.users.isLoading);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
          <p>{user.website}</p>
        </div>
      ))}

      <Button onClick={() => dispatch(getAllUsersFromServer(count))}>
        {isLoading ? (
          <>
            <span>Loading User...</span>
            <BeatLoader />
          </>
        ) : (
          'Get User'
        )}
      </Button>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default App;
