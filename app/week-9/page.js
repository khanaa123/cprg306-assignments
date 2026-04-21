
import { useUserAuth } from "../contexts/AuthContext";
 

const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 

await gitHubSignIn();
 

await firebaseSignOut();
 

<p>
  Welcome, {user.displayName} ({user.email})
</p>;