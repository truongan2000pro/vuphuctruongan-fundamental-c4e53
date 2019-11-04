let words =["an","haha","huhu","haha","hoang","deo","hoang","an"]
let words2=[...new Set(words)]
let wordsObject ={}
// console.log(`${words2}`)
for(let i=0;i<words2.length;i++){
    let x=words2[i]
    let count=0
    for(let j=words.indexOf(x);j<words.length;j++){
        if(x==words[j]){
            count = count+1
        }
    }
    wordsObject[x] = count //create
    // console.log(`${words2[i]}:${wordsObject.x}`)
}
console.log(wordsObject)