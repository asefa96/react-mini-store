
const createEmitter = () => {
    const subscriptions = new Map<
        ReturnType<typeof Symbol>,
        React.Dispatch<React.SetStateAction<any>>
    >();
    return {
        emit: (v: any) => subscriptions.forEach((fn) => fn(v)),
        subscribe: (fn: React.Dispatch<React.SetStateAction<any>>) => {
            const key = Symbol();
            subscriptions.set(key, fn);
            return () => {
                subscriptions.delete(key);
            };
        }
    };
};

export { createEmitter };
