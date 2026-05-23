import { useContext } from "react";
import AuthContext from "../authentication/AuthContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.username}</h2>

      <p>Role: {user.role}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;