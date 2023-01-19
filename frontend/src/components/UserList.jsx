import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users,setUser] = useState([]);
  useEffect(() => {
    getUsers();
  },[]);
  const getUsers = async () => {
    const response = await axios.get('http://localhost:3001/users')
    setUser(response.data);
  };
const deleteUser = async(id)=> {
  try {
    await axios.delete(`http://localhost:3001/users/${id}`);
    getUsers();
  } catch (error) {
    console.log(error)
  }
}

  return (
    <div className="columns mt-5 is-centered">
      <Link to={`add`} className="button is-success" >Add New</Link>
        <div className="mt-6 columns is-half">
            <table className="table is-striped is-fullwidth">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  <Link to={`edit/${user.id}`}className='button is-small is-info'>Edit</Link>
                  <button onClick={()=> { deleteUser(user.id)}} className='button is-small is-danger'>Remove</button>
                </td>
              </tr>
                ))}
              </tbody>
            </table>
        </div>
    </div>
  );
};

export default UserList;
