let inventory =[
{
    Name: "HP Envy 1",
    Price: 21000,
    Brand: "HP",
    Quantity: 5,
},
{
    Name: "Dell XPS 9370",
    Price: 30000,
    Brand: "Dell",
    Quantity: 12,
},
{
    Name: "Dell Lati E5450",
    Price: 8600,
    Brand: "Dell",
    Quantity: 2,
},
{
    Name: "Asus Zenok",
    Brand: "Asus",
    Price: 20000,
    Quantity: 4,
},
{
    Name: "HP Pa",
    Brand: "HP",
    Price: 14000,
    Quantity: 7,
},]
let brand =[]
let inventoryByBrand ={}
for(i=0;i<inventory.length;i++){
    brand.push(inventory[i].Brand.toLowerCase())
    inventoryByBrand[brand[i]]=[]
}
for(i=0;i<inventory.length;i++){
    let items = inventory[i]
    inventoryByBrand[brand[i]].push(items)
}
console.log(inventoryByBrand)
let userInput = prompt("Nhập vào tên hãng").toLowerCase()
let nameOfprocduct=''
let cash=0
let stringCash=""
if(brand.includes(userInput)){
        for(let z=0;z<inventoryByBrand[userInput].length;z++){
            // console.log(inventoryByBrand[userInput].Name)
            nameOfprocduct += `${inventoryByBrand[userInput][z].Name}`
            cash+= inventoryByBrand[userInput][z].Price*inventoryByBrand[userInput][z].Quantity*1000
        }
    stringCash = cash.toString()
        alert(`Có ${inventoryByBrand[userInput].length} kiểu máy ${userInput.toUpperCase()}\n${nameOfprocduct}\nTổng tiền là: ${stringCash}VND `)
}
else {
    alert("saiiii hãng")
}

