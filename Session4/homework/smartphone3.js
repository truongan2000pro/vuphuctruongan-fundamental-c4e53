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
product1.providers = ["TGDD","FPT"]
product2.providers = ["Media"]
product3.providers = ["AN","FPT"]
var array = products
var dunno=["name","price"]
var dunno1=["category"]
 for (let i=0;i<array.length;i++){
console.log(`#${i+1}.${array[i].name} \nprice: ${array[i].price} \nproviders: ${array[i].providers} `)
console.log("----------------------------------")
}
var inputProvider= [prompt("Nhập vào nhà cung cấp mà bạn muốn xem: ")]
// console.log(Object.values(product1.providers))
for(let i=0;i<products.length;i++){
    let value= Object.values(products[i].providers)
    // console.log(value)
    for(x in value){
        if((value)[x] == inputProvider  ){
                console.log(`name: ${array[i].name} \nbrand: ${array[i].brand} \ncolor: ${array[i].color} \nprice: ${array[i].price} \ncategory: ${array[i].category} \nproviders: ${array[i].providers} `)
                console.log("----------------------------------------")
            }
        }
        
}