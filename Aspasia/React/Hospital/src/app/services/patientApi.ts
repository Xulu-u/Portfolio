import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot, } from "./firebase";

import { type QuerySnapshot } from "firebase/firestore";

import { Patient } from "../../common/types/Patient";

const collectionName = 'patients';

// CREATE
export const createPatient = async(obj:Patient):Promise<string> => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updatePatient = async (id:string, obj:Patient) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getPatients= async (): Promise<Patient[]>  => {
    const colRef = collection(db, collectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}

export const getPatientById = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// DELETE
export const deletePatient = async (id:string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
}

const getArrayFromCollection = (collection: QuerySnapshot) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id } as Patient;
    });
}