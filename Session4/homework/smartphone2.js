var product1={
    name:"xiaomi note 4",
    brand: "xiaomi",
    price:400,
    color:"white",
    category: "phone"
}
var product2={
    name:"samsung charger",
    brand:"samsung",
    price:200,
    color:"black",
    category:"charger"
}
var product3={
    name:"Iphone X",
    brand:"Apple",
    price:600,
    color:"pink",
    category:"phone"
}
var products=[product1,product2,product3]
// product1.providers = ["TGDD","FPT"]
// product2.providers = ["Media"]
// product3.providers = ["AN","FPT"]
var array = products
var dunno=["name","price"]
var dunno1=["category"]
 for (let i=0;i<array.length;i++){
console.log(`#${i+1}.${array[i].name} \nprice: ${array[i].price} \nproviders: ${array[i].providers} `)
console.log("----------------------------------")
}
let userInput=parseInt(prompt("Nhập vào vị trí bạn muốn xem thông tin điện thoại: "))
if(userInput - 1 >= products.length || userInput -1 <0){
    alert("sai vị trí rồi !!!!")
}
else if(userInput -1 <products.length && userInput-1>=0){
    var {name,brand,price,color,category} = array[userInput-1]
    console.log(`Name:${name}\nBrand:${brand}\nPrice:${price}\nColor:${color}\nCategory:${category}`)
}



