export const signupUser = (user) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCreds) => console.log("User account created sucessfully!", userCreds))
            .catch((err => console.log("Account creation failed", err)));
    };
};


export const loginUser = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => console.log("User logged in sucessfully!"))
            .catch(err => console.log("Sorry something went wrong!"))
    }
}


export const logoutUser = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.logout()
        .then((res) => console.log("User logout sucessfully", res))
        .catch((err) => console.log("Sorry, somrthing went wrong", err))
    }
}
