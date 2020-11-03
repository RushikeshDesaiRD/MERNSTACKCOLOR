import { createStore ,applyMiddleware } from "redux";
import { composeWithDevTools }  from "redux-devtools-extension";
import Thunk from "redux-thunk";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import firebase from 'firebase/app';
import 'firebase/auth'
const fbConfig = {}
const rrfConfig = {
  userProfile: 'users'
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}
 
const store=createStore(
    rootReducer,
     composeWithDevTools(applyMiddleware(thunk))
 )
 export default store;