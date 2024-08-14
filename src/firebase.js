import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Get a reference to the Firebase Realtime Database service
const database = getDatabase(app);

export { auth, database, ref, get, set };
