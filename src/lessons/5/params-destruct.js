const foo = ([first, second = 2]) => first + second;
foo([1, 1]); // 2
foo([1]); // 3

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

/* es5 */

{
    function Config({ id, name } = defaultConfig) {
        this.id = id;
        this.name = name;
    }
    let config = new Config(); // default {id: 0, name: 'My awesome config'};
    console.log(config);
    config = new Config({ id: 1, name: 'Custom' }); // {id: 1, name: 'Custom'};
    console.log(config);
}