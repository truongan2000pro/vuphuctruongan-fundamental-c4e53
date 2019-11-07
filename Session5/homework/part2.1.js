let words =["huhu","an","haha","huhu","haha","hoang","deo","hoang","an","deo"]
let wordsObject ={}
for(let i=4;i<words.length;i++){
    let x=words[i]
    let count=0
    console.log(words.indexOf(x))
    for(let j=words.indexOf(x);j<words.length;j++){
        if(x==words[j]){
            count = count+1
        }
    }
    console.log(x,count,i)
    wordsObject[x] = count //create
}
