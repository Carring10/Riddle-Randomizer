const riddles = [
    {
        question : "riddle 0", 
        answer : "0"
    },
    {
        question : "riddle 1", 
        answer : "1"
    },
    {
        question : "riddle 2", 
        answer : "2"
    },
    {
        question : "riddle 3", 
        answer : "3"
    },
    {
        question : "riddle 4", 
        answer : "4"
    },
]

function handleButtonClick () {
    console.log(riddles[Math.floor(Math.random()*riddles.length)])
}