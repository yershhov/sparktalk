import {
  CollectionReference,
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { User, userConverter } from "../models/user";

class UsersService {
  collectionRef: CollectionReference;

  constructor() {
    this.collectionRef = collection(db, "users");
  }

  getById = async (id: string): Promise<User | null> => {
    const q = query(this.collectionRef, where("uid", "==", id));
    const querySnapshot = await getDocs(q);
    const userDoc = querySnapshot.docs[0];
    return userDoc ? (userDoc.data() as User) : null;
  };

  create = async (user: User) => {
    const { uid, email, displayName, photoURL } = user;
    const newUser = doc(this.collectionRef, uid).withConverter(userConverter);
    await setDoc(newUser, new User(uid, email!, displayName!, photoURL!));
  };
}

const usersService = new UsersService();

export default usersService;
