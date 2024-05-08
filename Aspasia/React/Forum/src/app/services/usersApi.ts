import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot, } from "./firebase";

import { type QuerySnapshot } from "firebase/firestore";

import { myUser, Task } from "../../common/types/myUser";

const userCollectionName = 'users';
const threadsCollectionName = 'threads';
const commentsCollectionName = 'comments';

// CREATE
export const createUser = async(obj:myUser):Promise<string> => {
    const colRef = collection(db, userCollectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// CREATE TASK
export const createTask = async(idUser:string, obj:Task):Promise<string> => {
    const colRef = collection(db, userCollectionName, idUser, threadsCollectionName);
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
        await setDoc(docRef, {});
        return result.user;
    });
}

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

// READ TASKS
export const getTasksByUserId = async (userId:string) => {
    const colRef = collection(db, userCollectionName, userId, 'tasks');
    const result = await getDocs(colRef);
    return getArrayFromCollection(result);
}

// DELETE
export const deleteUser = async (id:string) => {
    const docRef = doc(db, userCollectionName, id);
    await deleteDoc(docRef);
}

//DELETE TASK
export const deleteTask = async (userId:string, taskId:string) => {
    const docRef = doc(db, userCollectionName, userId, threadsCollectionName, taskId);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection: QuerySnapshot) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id } as myUser;
    });
}