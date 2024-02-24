const url = "https://crudcrud.com/api/3cb70163b47a49339e28057ccd8b4bc3/potrait";

const sendRequest = async (method, endpoint, data = null) => {
    try {
        const response = await fetch(`${url}${endpoint}`, {
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: data ? JSON.stringify(data) : null
        });

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const responseData = await response.json();
        return { data: responseData, error: null };
    } catch (error) {
        console.log(error.message);
        return { data: null, error: error.message };
    }
};

const getAllCartProductByUserEmail = async (email) => {
    const endpoint = `?email=${email}`;
    return sendRequest("GET", endpoint);
};

const addProductToCart = async (product) => {
    return sendRequest("POST", "", product);
};

const removeProductFromCart = async (id) => {
    const endpoint = `/${id}`;
    return sendRequest("DELETE", endpoint);
};

const updateProductInCart = async (id, product) => {
    const endpoint = `/${id}`;
    return sendRequest("PUT", endpoint, product);
};

const cartService = {
    getByEmail: getAllCartProductByUserEmail,
    post: addProductToCart,
    delete: removeProductFromCart,
    update: updateProductInCart
};

export default cartService;
