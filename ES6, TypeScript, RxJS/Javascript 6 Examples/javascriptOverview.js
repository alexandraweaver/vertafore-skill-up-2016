// JavaScript is finally seeing significant changes to push the language forward.
// Everything you see below is valid JavaScript of today.
// You can run it in your browser without any sort of pre-compiling step.
// In fact, go ahead and copy/paste it into Chrome's console and see what pageWords gives you.

const pageWords = Array.from(document.querySelectorAll('*'))
    .map(({innerText})=> innerText)
    .filter(string => string.length && string.length < 10)
    .reduce((acc, string)=>
            acc.includes(string) ? acc : [...acc, string],
        []);

