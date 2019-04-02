let lessons = [...Array(10).keys()].map(id => ({ id: id+1 }));
const meta = new WeakMap(lessons.map(lesson => [lesson, { views: 0, timing: lesson.id * 60 * 0.5 }]));
meta.get(lessons[0]).views++;
meta.get(lessons[1]).views++;
console.log(meta)
console.log(meta.get(lessons[0]));
console.log(meta.get(lessons[1]));
lessons = null;
// run garbage collector from chrome devtools
setTimeout(() => console.log(meta), 5000);