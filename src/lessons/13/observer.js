
function createObservable(target) {
    const listeners = new Map();
    const api = {
        watch$(key, handle) {
            const handlers = listeners.get(key) || [];
            listeners.set(key, [...handlers, handle]);
            return () => {
                listeners.set(key, listeners.get(key).filter(cb => handle !== cb))
            }
        }
    }

    return new Proxy(target, {
        get(target, key) {
            if (key in api) {
                return api[key];
            }
            return target[key];
        },
        set(target, key, value, receiver) {
            if (listeners.has(key)) {
                listeners.get(key).forEach(handle => handle(target[key], value));
            }
            Reflect.set(target, key, value, receiver);
        },
        deleteProperty(target, key) {
            if (listeners.has(key)) {
                listeners.delete(key);
            }
            Reflect.deleteProperty(target, key);
        }
    });
}

const observable = createObservable({});
const watcher = observable.watch$('x', (prev, curr) => console.log(`Prev value: ${prev}, Curr value: ${curr}`));
observable.x = 10;
watcher();
observable.x = 20;