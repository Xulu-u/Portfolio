import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot, } from "./firebase";

import { type QuerySnapshot } from "firebase/firestore";

import { User, Task } from "../../common/types/User";

const collectionName = 'users';
const nestedCollectionName = 'tasks';

// CREATE
export const createUser = async(obj:User):Promise<string> => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// CREATE TASK
export const createTask = async(idUser:string, obj:Task):Promise<string> => {
    const colRef = collection(db, collectionName, idUser, nestedCollectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// ACCESS (If it does not exist already then create it)
export const access = async (name:string) => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef, where('name', '==', name)));
    if (result.size === 0) {
        const a = await addDoc(colRef, { name });
        return a.id;
    }
    return result.docs[0].id;
}

// UPDATE
export const updateUser = async (id:string, obj:User) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getUsers= async (): Promise<User[]>  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getUserById = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// READ TASKS
export const getTasksByUserId = async (userId:string) => {
    const colRef = collection(db, 'users', userId, 'tasks');
    const result = await getDocs(colRef);
    return getArrayFromCollection(result);
}

// DELETE
export const deleteUser = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

//DELETE TASK
export const deleteTask = async (userId:string, taskId:string) => {
    const docRef = doc(db, collectionName, userId, nestedCollectionName, taskId);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection: QuerySnapshot) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id } as User;
    });
}