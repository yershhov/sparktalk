import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";

export class User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  // accessToken?: string;

  constructor(
    uid: string,
    email: string,
    displayName: string,
    photoURL: string
    // accessToken?: string
  ) {
    this.uid = uid;
    this.email = email;
    this.displayName = displayName;
    this.photoURL = photoURL;
    // this.accessToken = accessToken;
  }
}

export const userConverter: FirestoreDataConverter<User> = {
  toFirestore: (user: User) => {
    const { uid, email, displayName, photoURL } = user;

    return {
      uid: uid,
      email: email,
      displayName: displayName,
      photoURL: photoURL,
      // accessToken: accessToken,
    };
  },
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<User>,
    options: SnapshotOptions
  ) => {
    const user = snapshot.data(options) as User;
    const { uid, email, displayName, photoURL } = user;

    return new User(uid, email, displayName, photoURL);
  },
};
