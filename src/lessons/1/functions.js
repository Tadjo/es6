if (1) {
    inside();
    function inside() {
        console.log('inside')
    }
}

try {
    console.log(inside);
} catch (error) {
    console.log(error);
}