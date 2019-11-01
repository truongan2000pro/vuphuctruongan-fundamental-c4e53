var product1={
    name:"xiaomi note 4",
    brand: "xiaomi",
    price:400,
    color:"white",
    category: "phone"
}
product2={
    name:"samsung charger",
    brand:"samsung",
    price:200,
    color:"black",
    category:"charger"
}
product3={
    name:"Iphone X",
    brand:"Apple",
    price:600,
    color:"pink",
    category:"phone"
}
var products=[product1,product2,product3]
var array = products
var dunno=["name","price"]
var dunno1=["category"]
 for (let i=0;i<array.length;i++){
for(let x in dunno){
console.log(`${i+1} ${dunno[x]}: ${array[i][dunno[x]]}`)
}
console.log("----------------------------------")
}  
let v=0
while(v<2){
let userInput=prompt("Nhap vao Category ban muon xem")
for(let i=0;i<array.length;i++){
        var {name,brand,price,color,category} = array[i]
if(userInput == category){
        for(let x in dunno){
            console.log(`${dunno[x]}: ${array[i][dunno[x]]}`)
            }
            console.log("-------------------------------------")
        }
        else if(userInput != "charger" && userInput != "phone" ){
            alert("Nhập không đúng rồi nhập lại đi!!!!!")
            break
        }
    }
}


//var value=Object.values(array[1])
// if(userInput == "charger" ){
    
// }
// else{
//     console.log("dcm")
// }
