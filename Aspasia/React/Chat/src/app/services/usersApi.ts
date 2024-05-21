import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot, } from "./firebase";

import { type QuerySnapshot } from "firebase/firestore";

import { myUser } from "../../common/types/myUser";

const userCollectionName = 'users';

// CREATE
export const createUser = async(obj:myUser):Promise<string> => {
    const colRef = collection(db, userCollectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// ACCESS (If it does not exist already then create it)
export const access = async (name:string) => {
    const colRef = collection(db, userCollectionName);
    const result = await getDocs(query(colRef, where('name', '==', name)));
    if (result.size === 0) {
        const a = await addDoc(colRef, { name });
        return a.id;
    }
    return result.docs[0].id;
}

// GOOGlE AUTH
export const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(async result => {
        const docRef = doc(db, userCollectionName, result.user.uid);
        await setDoc(docRef, {uid: result.user.uid, email: result.user.email, name: result.user.displayName, password: ''});
        return result.user;
    });
}

// export const signUp = async (email:string, password:string) => {
//     try {
//         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//         sendEmailVerification(userCredential.user);
//         const user = userCredential.user;
//         const docRef = doc(db, userCollectionName, user.uid);
//         await setDoc(docRef, {uid: user.uid, email: user.email, name: user.displayName,});
//         return user.uid;
//     } catch (err) {
//         return err.message;
//     }
// }

// export const signIn = async (email:string, password:string) => {
//     try {
//         const result = await signInWithEmailAndPassword(auth, email, password);
//         return result.user.uid;
//     } catch (err) {
//         return err.message;
//     }
// }

// export const getCurrentUserId = async () => await auth.currentUser?.uid;
export const logout = async () => await signOut(auth);

// UPDATE
export const updateUser = async (id:string, obj:myUser) => {
    const docRef = doc(db, userCollectionName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getUsers= async (): Promise<myUser[]>  => {
    const colRef = collection(db, userCollectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getUserById = async (id:string) => {
    const docRef = doc(db, userCollectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// DELETE
export const deleteUser = async (id:string) => {
    const docRef = doc(db, userCollectionName, id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection: QuerySnapshot) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id } as myUser;
    });
}