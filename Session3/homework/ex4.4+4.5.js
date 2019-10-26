let cuu=[20,40,60,50];
console.log(`Đàn cừu của An lúc còn còi là ${cuu}`)
let j=1
let plus=50
while(j<5){
     for(let i=0; i<cuu.length ;i++){
        cuu[i]=plus+cuu[i]           
    }
    console.log(`Tháng ${j}`)
    console.log(`1 tháng nữa lại qua cân nặng của những chú cừu còi là ${cuu}`)
    console.log(`hãy cùng xén lông con cừu ${Math.max(...cuu)}(kg) cũng là con cừu nặng nhất trong đàn `)
    cuu[cuu.indexOf(Math.max(...cuu))]= 10
    console.log(`cân nặng tất cả cừu của An sau khi con to nhất bị vặt lông là ${cuu}`)
    j++
    }
let money=cuu.reduce((
    a, c) => a + c    
    );    
console.log("Tổng cân nặng đàn cừu của An là:",money)
console.log(`vậy An sẽ có tổng tiền là: 2($) * ${money} = ${money*2}($) `)