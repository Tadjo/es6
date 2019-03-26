const target = {value: true};
const proxy = new Proxy(target, {
    get(target, key) {
        console.log(`Access prop: ${key}`);
        return target[key];
    },
    set(target, key, value) {
        console.log(`Set ${key}: ${value}`);
        target[key] = value;
    }
});


proxy.value; // Access prop: value
proxy.value = false; // Set value: false

const target = { value: true };
const proxy = new Proxy(target, {
    has(target, key) {
        if (key === 'include') {
            return true;
        }
    }
});

console.log('include' in target); // true


