export const initialPotraitState = {
    potraits: [],
    isLoading: false,
    error: null,
};

const PotraitReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_POTRAITS_REQUEST":
            return { ...state, isLoading: true, error: null };
        case "FETCH_POTRAITS_SUCCESS":
            return { ...state, isLoading: false, potraits: action.payload };
        case "FETCH_POTRAITS_FAILURE":
            return { ...state, isLoading: false, error: action.payload };
        case "ADD_POTRAIT":
            return { ...state, potraits: [action.payload, ...state.potraits] };
        case "UPDATE_POTRAIT":
            return {
                ...state,
                potraits: state.potraits.map((potrait) =>
                    potrait.id === action.payload.id ? action.payload.data : potrait
                ),
            };
        case "DELETE_POTRAIT":
            return {
                ...state,
                potraits: state.potraits.filter(
                    (potrait) => potrait.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
export default PotraitReducer;