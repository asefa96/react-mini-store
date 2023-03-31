import { useState, useEffect } from 'react';
import { createEmitter } from './createEmitter';

const createStore = (init: any) => {
    // create an emitter
    const emitter = createEmitter();
    let store: any = null;
    const get = () => store;
    const set = (op: any) => ((store = op(store)), emitter.emit(store));

    store = init(get, set);

    const useStore = () => {
        const [localStore, setLocalStore] = useState(get());

        useEffect(() => emitter.subscribe(setLocalStore), []);
        return localStore;
    };
    return useStore;
};

export default createStore;
