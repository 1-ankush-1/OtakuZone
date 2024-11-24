import { collection, addDoc, getDoc, doc, getDocs, setDoc, deleteDoc } from "firebase/firestore";
import db from "../firebase-setup";

const updatePotraitDataBackend = async (id, potrait) => {
    try {
        console.log("the data::::",id, potrait);
        const potraitRef = collection(db, "potraits");
        await setDoc(doc(potraitRef, id), potrait);
        return { data: true, error: null };
    } catch (error) {
        console.log("Error updating potrait data:", error.message);
        return { data: false, error: error.message };
    }
};

const addPotraitDataBackend = async (potrait) => {
    try {
        const potraitRef = collection(db, "potraits");
        const docRef = await addDoc(potraitRef, potrait);
        const id = docRef.id;
        return { data: { id, ...potrait }, error: null };
    } catch (error) {
        console.log("Error adding potrait data:", error.message);
        return { data: false, error: error.message };
    }
};

const deletePotraitDataBackend = async (potraitId) => {
    try {
        const potraitRef = collection(db, "potraits");
        await deleteDoc(doc(potraitRef, potraitId));
        return { data: true, error: null };
    } catch (error) {
        console.log("Error deleting potrait data:", error.message);
        return { data: false, error: error.message };
    }
};

const getPotraitDetailsBackend = async (potraitId) => {
    try {
        const potraitRef = collection(db, "potraits");
        const snapshot = await getDoc(doc(potraitRef, potraitId));
        if (snapshot.exists()) {
            return { data: snapshot.data(), error: null };
        } else {
            return { data: null, error: "Potrait not found" };
        }
    } catch (error) {
        console.log("Error fetching potrait data:", error.message);
        return { data: null, error: error.message };
    }
};

const fetchAllPotraitDataBackend = async () => {
    try {
        const potraitRef = collection(db, "potraits");
        const snapshot = await getDocs(potraitRef);
        const potraits = [];
        snapshot.forEach((doc) => {
            potraits.push({ id: doc.id, ...doc.data() });
        });
        return { data: potraits, error: null };
    } catch (error) {
        console.log("Error fetching all potrait data:", error.message);
        return { data: null, error: error.message };
    }
};

const PotraitService = {
    update: updatePotraitDataBackend,
    post: addPotraitDataBackend,
    delete: deletePotraitDataBackend,
    getAll: fetchAllPotraitDataBackend,
    get: getPotraitDetailsBackend
};

export default PotraitService;