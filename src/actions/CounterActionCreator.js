import { INCREMENT, DECREMENT, RESET } from "./actionType";

export const increment = (value) => {
    return {
        type: INCREMENT,
        value: value
    }
}

export const decrement = (value) => {
    return {
        type: DECREMENT,
        value: value
    }
}

export const reset = () => {
    return {
        type: RESET,

    }
}