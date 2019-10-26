let cuu=[20,40,60,50];
console.log(`xin chào mình là An và đây là size của đàn cừu của mình \n ${cuu}`)
let big = Math.max(...cuu)
console.log(`hãy cùng xén lông con cừu ${big}(kg) cũng là con cừu nặng nhất trong đàn `)
let a=cuu.indexOf(big)
let change =10
cuu[a]= change
console.log(`cân nặng tất cả cừu của An sau khi con to nhất bị vặt lông là ${cuu}`)
let plus=50
for(let i=0;i<cuu.length;i++){
    cuu[i]=plus+cuu[i]
       }
console.log(`Đàn cừu sau 1 tháng ăn cám tăng trọng là ${cuu}`)

