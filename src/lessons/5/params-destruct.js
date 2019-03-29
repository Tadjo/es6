const foo = ([first, second = 2]) => first + second;
foo([1, 1]); // 2
foo([1]); // 3

const defaultConfig = { id: 0, name: 'My awesome config' };
function Config({ id, name } = defaultConfig) {
    this.id = id;
    this.name = name;
}
new Config(); // default {id: 0, name: 'My awesome config'};
new Config({ id: 1, name: 'Custom' }); // {id: 1, name: 'Custom'};