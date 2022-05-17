import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const navigate = useNavigate();
    const {data: users, isLoading, error, refetch}  = useQuery('users', () => fetch('https://thawing-dusk-20160.herokuapp.com/user', {
        method: 'GET',
        headers: {
            'content-type': 'application.json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      }));
    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl">Total Users: {users.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((user, index) => <UserRow key={user._id} index={index} user={user} refetch={refetch}></UserRow>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;