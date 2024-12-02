import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          
          fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const remainigUser = users.filter(user => user._id !== _id);
              setUsers(remainigUser);
            }
          })
        }
      });
    }
    return (
        <div>
            <h1>Total Users : {users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Creation Time</th>
        <th>Last Login</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        users.map(user =>   <tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.createdAt}</td>
            <td>{user.lastSignInTime}</td>
            <td className='space-x-2'>
                <button className='btn' >Edit</button>
                <button className='btn'onClick={() => handleDelete(user._id)}>Delete</button>
            </td>
          </tr>)
      }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;