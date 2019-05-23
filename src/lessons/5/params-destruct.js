const foo = ([first, second = 2]) => first + second;
console.log(foo([1, 1])); // 2
console.log(foo([1])); // 3



const timer = (delay, value) => new Promise(res => setTimeout(() => res(value), delay));

Promise.all(
    Array.from({length: 10}).map((k, i) => timer(i * 50, i +1))
).then(([first, second, ...others]) => {
    console.group('Promise.all()')
    console.log(first); // 1
    console.log(second); // 2
    console.log(others); // [3, 4, 5, 6, 7, 8, 9, 10]
    console.groupEnd();
});

/* Default config */
const defaultConfig = { id: 0, name: 'My awesome config' };

/* es5 */

{
    function Config(config) {
        this.id = (config && config.id) || defaultConfig.id;
        this.name = (config && config.name) || defaultConfig.name;
    }
    let config = new Config();
    console.log(config);
    config = new Config({ id: 1, name: 'Custom' });
    console.log(config);
}

/* es6 */

{
class Config {
    constructor({ id, name } = defaultConfig) {
        this.id = id;
        this.name = name;
    }
}
let config = new Config(); // default {id: 0, name: 'My awesome config'};
console.log(config);
config = new Config({ id: 1, name: 'Custom' }); // {id: 1, name: 'Custom'};
console.log(config);
}