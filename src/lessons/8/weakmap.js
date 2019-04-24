const meta = new WeakMap();

Array.from({length: 10}).forEach((value, index) => {
    const lessonElement = document.body.appendChild(document.createElement('div'));
    const metaInfo = { views: Math.round(Math.random() * 100), duration: index * 60 * 0.5 };
    lessonElement.className = 'lesson';
    meta.set(lessonElement, metaInfo);
    lessonElement.innerHTML = `Lesson ${index}: views - ${metaInfo.views}, duration - ${metaInfo.duration/60}h`;
});

const deleteBtn = document.body.appendChild(document.createElement('button'));
const consoleBtn = document.body.appendChild(document.createElement('button'));
deleteBtn.innerHTML = 'Delete Random';
consoleBtn.innerHTML = 'Check';

deleteBtn.addEventListener('click', () => {
    const index = Math.round(Math.random() * 9);
    document.querySelectorAll('.lesson')[index].remove();
});

consoleBtn.addEventListener('click', () => {
    console.dir(meta);
});