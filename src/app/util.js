import { signOut } from 'aws-amplify/auth';

export const handleSignOut = async () =>{
  try {
    await signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

