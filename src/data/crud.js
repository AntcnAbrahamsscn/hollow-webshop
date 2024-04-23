import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "./firestore.js";

const collectionName = "kites";
const collectionRef = collection(db, collectionName);

async function getKites() {
    const kitesCollection = collection(db, collectionName);

    const kitesSnapshot = await getDocs(kitesCollection);

    const kitesList = kitesSnapshot.docs.map((doc) => withKey(doc));
    return kitesList;
}

function withKey(doc) {
    let o = doc.data();
    o.key = doc.id;
    return o;
}

export { getKites };
