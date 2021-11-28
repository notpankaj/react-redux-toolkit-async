import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./features/users/userSlice";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users, "USERS");
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="App">
      {users.status && <h1>{users.status}</h1>}
      {users.users && users.users.map((u) => <div key={u.id}>{u.name}</div>)}
    </div>
  );
}

export default App;
