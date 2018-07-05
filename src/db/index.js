import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: 'AIzaSyCOLxzFylaJDJIBhgT0xJa3LWw4RVaT8iI',
    authDomain: 'qprice-b74bb.firebaseapp.com',
    databaseURL: 'https://qprice-b74bb.firebaseio.com',
    projectId: 'qprice-b74bb',
    storageBucket: 'qprice-b74bb.appspot.com',
    messagingSenderId: '584777137676'
  };

  
const firebaseapp = firebase.initializeApp(config)
firebase.firestore().settings( { timestampsInSnapshots: true })

export default firebaseapp.firestore()

