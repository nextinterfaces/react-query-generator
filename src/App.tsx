import { useState } from 'react';
import { useGetUsersQuery, useCreateUserMutation } from './generated-queries';

function App() {
  // const { data: users, refetch } = useGetUsersQuery();
  // const { mutate: createUser } = useCreateUserMutation();

  // const handleCreateUser = () => {
  //   createUser({ id: Date.now(), name: 'New User' });
  // };

  return (
    <>
      <div className="card">111
        {/*<button onClick={refetch}>*/}
        {/*  Get Users*/}
        {/*</button>*/}
        {/*<button onClick={handleCreateUser}>*/}
        {/*  Create User*/}
        {/*</button>*/}
        {/*<div>*/}
        {/*  {users && users.map(user => (*/}
        {/*    <div key={user.id}>{user.name}</div>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </>
  );
}

export default App;
