import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {AuthState, SignIn, SignUp} from '../../types/Types';
import axios from 'axios';
import {PATH} from '../../constants/constants';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};
GoogleSignin.configure({
  webClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
});

export const SignupUser = createAsyncThunk(
  'auth/SignupUser',
  async (
    {displayName, email, password, confirmPassword}: SignUp,
    {dispatch},
  ) => {
    dispatch(setLoading(true));

    try {
      if (!displayName || !email || !password || !confirmPassword) {
        ToastAndroid.show('Please enter all fields', ToastAndroid.SHORT);
        throw new Error('Validation failed: Missing fields');
      }
      if (password !== confirmPassword) {
        ToastAndroid.show('Passwords do not match', ToastAndroid.SHORT);
        throw new Error('Validation failed: Passwords do not match');
      }
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const user = userCredential.user;
      await user.updateProfile({displayName});
      const response = await axios.post(`${PATH}/register`, {
        email,
        password,
        displayName,
        photoUrl: 'https://via.placeholder.com/52x52',
        status: 'Hi there I am using Techat...',
        uid: user.uid,
      });

      console.log('User Sign Up Success', response.data);
      ToastAndroid.show('User registered successfully!', ToastAndroid.SHORT);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show(
          'That email address is already in use!',
          ToastAndroid.SHORT,
        );
      } else if (error.code === 'auth/invalid-email') {
        ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT);
      } else {
        ToastAndroid.show(
          'An error occurred during sign up!',
          ToastAndroid.SHORT,
        );
        console.error('Error during sign up:', error);
      }
    } finally {
      dispatch(setLoading(false));
    }
  },
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}: SignIn, {dispatch}) => {
    dispatch(setLoading(true));
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const currentUser = userCredential?.user;

      if (currentUser) {
        dispatch(
          setUser({
            ...currentUser,
            displayName: currentUser?.displayName || '',
            email: currentUser?.email || '',
          }),
        );
      }
      ToastAndroid.show('User logged in!', ToastAndroid.SHORT);
    } catch (error: any) {
      console.log(error, 'error from login');
      dispatch(setError(error.message));
      throw new error();
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, {dispatch}) => {
    if (!email) {
      ToastAndroid.show('Please enter your email address', ToastAndroid.SHORT);
    }
    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        ToastAndroid.show('Password reset email sent!', ToastAndroid.SHORT);
      })
      .catch(error => {
        let errorMessage =
          'An error occurred while sending the password reset email. Please try again.';
        if (error.code === 'auth/user-not-found') {
          errorMessage = 'That email address is not registered!';
        }
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      });
  },
);

export const googleSignin = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const uid = auth().currentUser?.uid;
    let userDoc;
    try {
      userDoc = await axios.get(`${PATH}/user`, {params: {uid}});
    } catch (err: any) {
      if (err.response && err.response.status === 404) {
        console.log('User not found, proceeding with registration.');
      } else if (err.message.includes('Network Error')) {
        console.error('Network Error while fetching user data:', err);
        ToastAndroid.show(
          'Network error! Please try again later.',
          ToastAndroid.SHORT,
        );
        return;
      } else {
        // console.error('Error fetching user data:', err);
        ToastAndroid.show(
          'An error occurred while fetching user data.',
          ToastAndroid.SHORT,
        );
        return;
      }
    }
    if (!userDoc || !userDoc.data) {
      try {
        await axios.post(`${PATH}/register`, {
          displayName: auth()?.currentUser?.displayName,
          email: auth()?.currentUser?.email,
          photoUrl: auth()?.currentUser?.photoURL || null,
          status: 'Hi there I am using Techat',
          uid: auth()?.currentUser?.uid,
        });
        ToastAndroid.show(
          'New user signed up successfully!',
          ToastAndroid.SHORT,
        );
      } catch (err) {
        console.error('Error during registration:', err);
        ToastAndroid.show(
          'An error occurred during registration!',
          ToastAndroid.SHORT,
        );
      }
    } else {
      ToastAndroid.show('User signed in successfully!', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.error('Error during Google Sign-In:', error);
    ToastAndroid.show('An error occurred during sign-in!', ToastAndroid.SHORT);
  }
};

export const LogOut = createAsyncThunk('auth/logout', async () => {
  await auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
    })
    .catch(error => {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      ToastAndroid.show(
        'An error occurred while signing out. Please try again.',
        ToastAndroid.LONG,
      );
      console.log(
        'An error occurred while signing out. Please try again.',
        error,
      );
    });
});
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseAuthTypes.User | null>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(SignupUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(SignupUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(SignupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Signup failed';
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(forgotPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Forget Password failed';
      })
      .addCase(LogOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(LogOut.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(LogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Forget Password failed';
      });
  },
});

export const {setUser, setLoading, setError} = authSlice.actions;

export default authSlice.reducer;
