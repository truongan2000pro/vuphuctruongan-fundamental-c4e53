
var quizzes=[{
    question:"An sinh năm bao nhiêu?",
    choices:[1999,2000,3000,4000],
    rightChoice:2000
},{
    question:"Ai là batman?",
    choices:["Bruce","Joker","An","Thomas"],
    rightChoice:"Bruce"
}]
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
let count=0
while(quizzes.length>0){
let random= quizzes[Math.floor(Math.random()*quizzes.length)]
let{question,choices,rightChoice} =random
shuffleArray(choices)
let contentChoice = '';
choices.forEach((v, i) => {
    contentChoice += `\n${i+1}. ${v}`;
})
console.log(contentChoice);
let content = `${question}${contentChoice}`;
    let userInput =Number(prompt(content))
    if(choices[userInput-1] == rightChoice){
        alert("Win")
        count += 1    
    }
        else{
        alert("Lose")
    }
    quizzes.splice(quizzes.indexOf(random),1) 

if(quizzes.length ==0 ){
    alert("hết rồi !!!!")
    break
}
 }

console.log("điểm số của bạn là:", count)


