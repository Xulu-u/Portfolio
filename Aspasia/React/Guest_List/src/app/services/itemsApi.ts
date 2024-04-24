import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot } from "./firebase";

import { Collection, Item } from "common/types/Items";

const collectionName = 'items';

// CREATE
export const createItem = async(obj:Item):Promise<string> => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateItem = async (id:string, obj:Item) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getItems= async ():Promise<Item>  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

// DELETE
export const deleteItem = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}