import { collection, getDocs, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { db } from "./firestore.js";

const collectionName = "kites";
const collectionRef = collection(db, collectionName);

async function getKites() {
    const kitesCollection = collection(db, collectionName);

    const kitesSnapshot = await getDocs(kitesCollection);

    const kitesList = kitesSnapshot.docs.map((doc) => withKey(doc));
    return kitesList;
}
async function addKite(kite) {
	await addDoc(collectionRef, kite)
}
async function deleteKite(key) {
    const docRef = doc(collectionRef, key)
    await deleteDoc(docRef)
}

async function updateKite(kite) {
    const docRef = doc(collectionRef, kite.key);
    await setDoc(docRef, kite);
}


function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;
    return o;
}

export { getKites, addKite, deleteKite, updateKite };
