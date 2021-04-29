import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase';
import { auth, provider } from 'firebase.config';
import { RootState } from 'store/store';

interface IUser {
  uid: string;
}

interface IDBSlice {
  user: IUser;
}

const initialState: IDBSlice = {
  user: { uid: '' },
};

// const isLoggedIn = async () => {
//   await auth.onAuthStateChanged((user) => {
//     if (user) {
//       console.log('UserLoggedIn');
//       console.log(user.uid);
//     } else {
//       console.log('UserLOGGEDOUT');
//     }
//   });
// };

// export const isUserLoggedIn = createAsyncThunk(
//   'dbSlice/isUserLoggedIn',
//   async () => {
//     const loginStatus = await auth.onAuthStateChanged((user) => {
//       if (user) {
//         console.log('UserLoggedIn');
//         console.log(user.uid);
//         return user.uid;
//       }
//       console.log('UserLOGGEDOUT');
//       return 'nie weszło do ifki';
//     });

//     console.log(await loginStatus);

//     // const loginStatus = await auth.currentUser;

//     // if (loginStatus) {
//     //   console.log(loginStatus);
//     //   // User is signed in.
//     // } else {
//     //   console.log('nostatus');

//     //   // No user is signed in.
//     // }

//     return loginStatus;
//   },
// );

export const isUserLoggedIn = createAsyncThunk(
  'dbSlice/isUserLoggedIn',
  async () => {
    try {
      const { currentUser } = await auth;
      return currentUser;
    } catch (error) {
      console.log('wypierdala error');
      return error;
    }

    // const uid = localStorage.getItem('uid');
  },
);

export const loginWithGoogle = createAsyncThunk(
  'dbSlice/loginWithGoogle',
  async () => {
    return auth
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return auth
          .signInWithPopup(provider)
          .then((result) => {
            const { user } = result;
            if (user !== null) {
              console.log(user.uid);
              return user.uid;
            }
            return null;
          })
          .catch((error) => {
            return error;
          });
      });
  },
);

export const logoutUser = createAsyncThunk('dbSlice/logoutUser', async () => {
  await auth
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);

      // An error happened.
    });
});

const dbSlice = createSlice({
  name: 'dbSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(isUserLoggedIn.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user.uid = action.payload;
    });
    builder.addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
      state.user.uid = payload;
    });
  },
});

export const selectUser = (state: RootState): IUser => state.DBReducer.user;
export default dbSlice.reducer;
