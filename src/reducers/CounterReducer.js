import { INCREMENT, DECREMENT, RESET } from "../actions/actionType";

let ct_initial_value = { a: 0 };

const CounterReducer = (state = ct_initial_value, action) => {

    switch (action.type) {
        case INCREMENT: return { ...state, a: state.a + action.value };
        case DECREMENT: return { ...state, a: state.a - action.value };
        case RESET: return { ...state, a: 0 };
        default: return { state };

    }
}
export default CounterReducer;