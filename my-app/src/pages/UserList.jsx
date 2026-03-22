// pages/UserList.jsx — সব user দেখাবে, click করলে detail-এ যাবে
import { Link } from 'react-router-dom';

function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <Link to={`/user/${user.id}`} key={user.id}>
          <p>{user.name}</p>
        </Link>
      ))}
    </div>
  );
}
export default UserList;