import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import db from "../firebase-setup";

const getAllCartProductByUserEmail = async (email) => {
    try {
        const cartRef = collection(db, "cart");
        const querySnapshot = await getDocs(cartRef);
        const cartProducts = [];
        querySnapshot.forEach((doc) => {
            const cartProduct = { id: doc.id, ...doc.data() };
            if (cartProduct.email === email) {
                cartProducts.push(cartProduct);
            }
        });
        return { data: cartProducts, error: null };
    } catch (error) {
        console.log(error.message);
        return { data: null, error: error.message };
    }
};

const addProductToCart = async (product) => {
    try {
        const cartRef = collection(db, "cart");
        const docRef = await addDoc(cartRef, product);
        const newProduct = { id: docRef.id, ...product };
        return { data: newProduct, error: null };
    } catch (error) {
        console.log(error.message);
        return { data: null, error: error.message };
    }
};

const removeProductFromCart = async (id) => {
    try {
        const cartRef = doc(db, "cart", id);
        await deleteDoc(cartRef);
        return { data: null, error: null };
    } catch (error) {
        console.log(error.message);
        return { data: null, error: error.message };
    }
};

const updateProductInCart = async (id, product) => {
    try {
        console.log("udapted",id,product)
        const cartRef = doc(db, "cart", id);
        await updateDoc(cartRef, product);
        return { data: true, error: null };
    } catch (error) {
        console.log(error.message);
        return { data: false, error: error.message };
    }
};

const cartService = {
    getByEmail: getAllCartProductByUserEmail,
    post: addProductToCart,
    delete: removeProductFromCart,
    update: updateProductInCart
};

export default cartService;
