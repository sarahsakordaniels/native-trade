import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCvcdvVaKmpfM8ssLhWLBM3TOS8fH76i9M",
    authDomain: "native-trade.firebaseapp.com",
    databaseURL: "https://native-trade.firebaseio.com",
    projectId: "native-trade",
    storageBucket: "native-trade.appspot.com",
    messagingSenderId: "367776351052",
    appId: "1:367776351052:web:99c740c1552af1ec2d85e9"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try{
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('error creating user', error.message);
            
        }
    } 

    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase