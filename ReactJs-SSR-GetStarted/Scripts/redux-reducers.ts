import { AnyAction } from 'redux';
import { RECEIVE_HELLOWORLD, IHelloWorldData } from './redux-actions';

const initialState: IHelloWorldData = {
    status: ''
};

export function helloWorld_reducers(state: IHelloWorldData = initialState, action: AnyAction) {
    switch (action.type) {
        case RECEIVE_HELLOWORLD:
            return { ...state, ...action.data }
        default:
            return state;
    }
}