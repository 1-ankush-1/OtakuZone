const url = "https://ecomm-dfca0-default-rtdb.asia-southeast1.firebasedatabase.app/potraits"

const updatePotraitDataBackend = async (id, potrait) => {
    try {
        const response = await fetch(`${url}.json`, {
            method: "PUT",
            body: JSON.stringify({ id, potrait }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.error("Error updating potrait data:", error);
    }
};

const addPotraitDataBackend = async (potrait) => {
    try {
        const response = await fetch(`${url}.json`, {
            method: "POST",
            body: JSON.stringify(potrait),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.error("Error adding potrait data:", error);
    }
};

const deletePotraitDataBackend = async (potraitId) => {
    try {
        const id = potraitId

        const response = await fetch(`${url}/${id}.json`, {
            method: "Delete",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.error("Error deleting potrait data:", error);
    }
};

const fetchAllPotraitDataBackend = async () => {
    try {
        const response = await fetch(`${url}.json`, { method: "GET" });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.error("Error fetching potrait data:", error);
    }
};


const getPotraitDetailsBackend = async (potraitId) => {
    try {
        const id = potraitId
        const response = await fetch(`${url}/${id}.json`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return response.json();
        }
    } catch (error) {
        console.error("Error deleting potrait data:", error);
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