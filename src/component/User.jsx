import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../redux/actions";
import UserCard from "./UserCard";

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {    /// React.useEffect(() => {  PARA QUE PASEN LOS TESTS
    dispatch(getAllUsers());
  }, [dispatch]);  

  return (
    <div>
      
      {users.map((user, index) => (
        <UserCard
        
          key={index}
          id={`${user.id}`}
          name={user.name}
          email={user.email}
        />
    
      ))}
    </div>
  );
};

export default Users;
