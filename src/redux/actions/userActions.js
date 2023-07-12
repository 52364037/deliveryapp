import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  // createEditWithEmailAndName,
} from "firebase/auth";
import { auth, google } from "../../Firebase/firebaseConfig";
import { userTypes } from "../types/userTypes";

export const registerActionAsync = ({ email, password, name, avatar }) => {
  return async (dispatch) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
  
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: avatar,
      });
      const { accessToken } = user.auth.currentUser;
      console.log(user);
      dispatch(registerActionSync({ email, name, avatar, accessToken }, null));
    } catch (error) {
      console.log(error);
      dispatch(
        registerActionSync({}, { code: error.code, message: error.message })
      );
    }
  };
};

// export const editActionAsync = ({ email, name }) => {
//   return async (dispatch) => {
//     try {
//       const { edit } = await createEditWithEmailAndName(
//         auth,
//         email,
//         name,
//       );
//       await updateProfile(auth.currentEdit, {
//         displayName: name,
//         displayName: email,
//       });
// //       const { accessToken } = edit.auth.currentEdit;
// //       console.log(edit);
// //       dispatch(editActionSyncActionSync({ email, name, accessToken }, null));
//     } catch (error) {
//       console.log(error);
// //       dispatch(
// // editActionSync({}, { code: error.code, message: error.message })
// //       );
//     };
//   };
// };
    

const registerActionSync = (newUser, error) => {
  return {
    type: userTypes.CREATE_USER,
    payload: {
      user: newUser,
      error: error,
    },
  };
};

export const logoutActionAsync = () => {
  return async (dispatch) => {
    let errors = null;
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
      errors = {
        error: true,
        code: error.code,
        message: error.message,
      };
    } finally {
      dispatch(logoutActionSync(errors));
    }
  };
};

const logoutActionSync = (error) => {
  return {
    type: userTypes.LOGOUT_USER,
    payload: error,
  };
};

export const loginActionAsync = (email, password) => {
  return async (dispatch) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      const { displayName, accessToken, photoURL } = user.auth.currentUser;

      const userLogged = {
        email,
        name: displayName,
        avatar: photoURL,
        accessToken,
      };

      dispatch(loginActionSync(userLogged));
    } catch (error) {
      console.log(error);
    }
  };
};
export const loginActionSync = (user) => {
  return {
    type: userTypes.LOGGIN_USER,
    payload: user,
  };
};

export const actionLoginGoogle = () => {
  return (dispatch) => {
    signInWithPopup(auth, google)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...

        const userLogged = {
          email: user.email,
          name: user.displayName,
          avatar: user.photoURL,
          accessToken: user.accessToken,
        }
        console.log(userLogged);
        dispatch(loginActionSync(userLogged));
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log(error);
      });
  }
}