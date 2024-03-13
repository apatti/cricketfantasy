import { signOut,getCurrentUser } from 'aws-amplify/auth';

export const handleSignOut = async () =>{
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

export const getCurrentUserName = async () =>{
  try {
    const { username, userId, signInDetails } = await getCurrentUser();
    return username;
  } catch (err) {
    console.log(err);
    return null;
  }
}

