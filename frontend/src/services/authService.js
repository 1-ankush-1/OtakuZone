import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";

const loginUser = async (user) => {
    try {
        const auth = getAuth();
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password);
        const userData = userCredential.user;
        const token = await userData.getIdToken();
        return { data: { email: userData.email, token: token }, error: null };
    } catch (error) {
        console.error('An error occurred in logging in user');
        return { data: null, error: error.message };
    }
};

const signupUser = async (user) => {
    try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        const userData = userCredential.user;
        const token = await userData.getIdToken();
        return { data: { email: userData.email, token: token }, error: null };
    } catch (error) {
        console.error('An error occurred in registering user');
        return { data: null, error: error.message };
    }
};

const ResetPassword = async (credentials) => {
    try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, credentials.email);
        return { data: null, error: null };
    } catch (error) {
        console.error('An error occurred in resetting password');
        return { data: null, error: error.message };
    }
}

const AuthServices = {
    signup: signupUser,
    login: loginUser,
    reset: ResetPassword
};

export default AuthServices;