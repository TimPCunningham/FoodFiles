import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, DocumentData } from 'firebase/firestore/lite';
import { IPerson, Person } from '../schemas/PersonSchema';
declare const process: any;

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDoman: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

console.log('config', config);

const app = initializeApp(config);
const db = getFirestore(app);


export const getNames = async (): Promise<Person[]> => {
  const namesRef = collection(db, 'names');
  const snapshot = await getDocs(namesRef);
  const namesList: Person[] = snapshot.docs.map(doc => new Person(doc.data() as IPerson));

  namesList.push(new Person({firstName: 'John', lastName: 'Smith', age: 55}));

  return namesList;
}