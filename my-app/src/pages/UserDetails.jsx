// pages/UserDetail.jsx — একজন user-এর detail দেখাবে
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]); // id বদলালে আবার fetch করবে

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>📧 {user.email}</p>
      <p>📍 {user.address.city}</p>
    </div>
  );
}
export default UserDetail;