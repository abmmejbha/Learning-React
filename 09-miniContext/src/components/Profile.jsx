import { useContext } from "react";
import UserContext from "../context/user";

function Profile() {
	const { user } = useContext(UserContext);

	if (!user) return <div>Please Login</div>;

	return <div>Welcome {user.userName}</div>;
}

export default Profile;