let words =["an","haha","huhu","haha","hoang","deo","hoang","an","deo"]
let wordsObject ={}
for(let i=0;i<words.length;i++){
    let x=words[i]
    let count=0
    for(let j=words.indexOf(x);j<words.length;j++){
        if(x==words[j]){
            count = count+1
        }
    }
    wordsObject[x] = count //create
}
console.log(wordsObject)