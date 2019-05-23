const course = {
    lessons: ['tick', 'tack'],
    [Symbol.toPrimitive](hint) { // hint is (number | string | default)
        switch (hint) {
            case 'number':
                return this.lessons.length;
            case 'string':
                return this.lessons.join(' ');
            case 'default':
                return this.lessons.length;
            default:
                throw new Error();
        }
    }
}

/* String */
console.log(String(course)); // tick tack
/* Default */
console.log(course == 2); // true
console.log(course + 1); // 2 + 1 = 3
/* number */
console.log(course * 3); // 2 * 3 = 6