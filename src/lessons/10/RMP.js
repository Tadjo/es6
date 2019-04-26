const library = (function() {
    const privateVar = 'private';
    const publicVar = 'public';

    return {
        publicVar,
        getPrivate() {
            return privateVar;
        },
        getInfo() {
            console.log('I\'m ordinary library v1.0');
        }
    }
})();
library.getInfo(); // Im ordinary library v1.0