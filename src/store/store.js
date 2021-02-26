import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { getFirestore, reduxFirestore, firestoreReducer } from 'redux-firestore';
import postsReducer from './postsReducer';
import firebase from '../Firebase/Firebase';

const reducer = combineReducers({
    firestore: firestoreReducer,
    usersState: postsReducer,
    firebase: firebaseReducer
})

export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(firebase),
        reduxFirestore(firebase)
    )
);
