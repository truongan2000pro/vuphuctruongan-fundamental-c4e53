let weight=parseFloat(prompt("Cân nặn bạn là: "))
let height=parseFloat(prompt('Chiều cao của bạn theo cm là: '))
const cao= height/100
let bmi = weight/(cao*cao)
console.log(`Chỉ số BMI của bạn là: ${bmi}`)
if(bmi<16){
    console.log("Severely underweigh")
}
else if(bmi<18.5){
    console.log("underweigh")
}
else if(bmi<25){
    console.log("Normal")
}
else if(bmi<30){
    console.log("Overweigh")
}
else{
    console.log("Obese")
}