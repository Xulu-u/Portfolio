import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail, fetchSignInMethodsForEmail, sendEmailVerification, db, doc, getDoc, getDocs, collection, setDoc, updateDoc, deleteDoc, addDoc, query, where, onSnapshot, } from "./firebase";

import { type QuerySnapshot } from "firebase/firestore";

import { Thread } from "../../common/types/thread";
import { Comment } from "../../common/types/comment";

const threadsCollectionName = 'threads';
const commentsCollectionName = 'comments';

// CREATE
export const createThread = async(obj:Thread):Promise<string> => {
    const colRef = collection(db, threadsCollectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// CREATE COMMENT
export const createComment = async(idThread:string, obj:Comment):Promise<string> => {
    const colRef = collection(db, threadsCollectionName, idThread, commentsCollectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE
export const updateThread = async (id:string, obj:Thread) => {
    const docRef = doc(db, threadsCollectionName, id);
    await updateDoc(docRef, obj)
}

// READ
export const getThreads= async (): Promise<Thread[]>  => {
    const colRef = collection(db, threadsCollectionName);
    const result = await getDocs(query(colRef));
    return getArrayFromThreadCollection(result);
}

export const getThreadById = async (id:string) => {
    const docRef = doc(db, threadsCollectionName, id);
    const result = await getDoc(docRef);
    return result.data();
}

// READ COMMENTS
export const getCommentsByThreadId = async (userId:string) => {
    const colRef = collection(db, threadsCollectionName, userId, commentsCollectionName);
    const result = await getDocs(colRef);
    return getArrayFromCommentCollection(result);
}

// DELETE
export const deleteThread = async (id:string) => {
    const docRef = doc(db, threadsCollectionName, id);
    await deleteDoc(docRef);
}

//DELETE COMMENT
export const deleteComment = async (userId:string, taskId:string) => {
    const docRef = doc(db, threadsCollectionName, userId, commentsCollectionName, taskId);
    await deleteDoc(docRef);
}

const getArrayFromThreadCollection = (collection: QuerySnapshot) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id } as Thread;
    });
}

const getArrayFromCommentCollection = (collection: QuerySnapshot) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id } as Comment;
    });
}