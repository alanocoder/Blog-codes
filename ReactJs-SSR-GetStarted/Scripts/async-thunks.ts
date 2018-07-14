import { receiveHelloWorldData, IHelloWorldData } from './redux-actions';
import { fetch, addTask } from 'domain-task';

export function retrieveData_simulated() {
    return (dispatch: <T>(action: any) => T, getState: () => any) => {
        // simulate data retrieval
        setTimeout(() => {
            dispatch(receiveHelloWorldData({ status: "Data received", count: 5 }));
        }, 5000);
    }
}

export function retrieveData() {
    return (dispatch: <T>(action: any) => T, getState: () => any) => {
        var p = fetch('/Home/GetHelloWorldData', { method: 'get' })
            .then(response => response.json())
            .then((data: IHelloWorldData) => dispatch(receiveHelloWorldData(data)))
            .catch(() => { }); // ignore errors in this example
        addTask(p);
    }
}