// let complete=false
let code1 ={
    name:"HTML",
    complete: false
}
let code2 ={
    name:"JAVA",
    complete: false
}
let code3={
    name:"PYTHON",
    complete: false
}
let process=[code1,code2,code3]
console.log("Đây là tiến trình khóa học của bạn:")
for(let i=0;i< process.length;i++){
    console.log(`${i+1}.${process[i].name} \nComplete: ${process[i].complete}`) 
}
let z=0
while(z<2){
let functions=prompt("Nhập vào chức năng bạn muốn:NEW/DELETE/UPDATE/COMPLETE hoặc nhập E để ngừng chương trình").toLowerCase()
if(functions == "e"){
    break
    }
else if(functions == "new"){
let userInput =prompt("Nhập vào task mới đi: ")
process.push(userInput={name:userInput,complete:false})
for(let i=0;i< process.length;i++){
    console.log(`${i+1}.${process[i].name} \nComplete: ${process[i].complete}`) 
        }
    }
else if(functions=="update"){
    let userPosition = parseInt(prompt("Nhập vào vị trí đi :"))
        if(userPosition -1 < process.length && userPosition-1 >=0){
            let userNewtile= prompt("Nhập vào tile mới đi: ")
            process[userPosition-1].name = userNewtile
            for(let i=0;i< process.length;i++){
                console.log(`${i+1}.${process[i].name} \nComplete: ${process[i].complete}`) 
                }
        
        }
    else{
        alert("Nhập sai rồi!!!!!!!!!!!!!")
        }
    }
else if(functions == "complete"){
    let userPositionIncomplete = parseInt(prompt("Nhập vào vị trí đi: "))
    if (userPositionIncomplete -1 < process.length && userPositionIncomplete-1>=0){
        process[userPositionIncomplete-1].complete =true
            for(let i=0;i< process.length;i++){
                console.log(`${i+1}.${process[i].name} \nComplete: ${process[i].complete}`) 
        
    }
    }
        else{
        alert("Nhập sai rồi!!!!!!!!!!!!!")
    }
}
else if(functions =="delete"){
   let userDelete= parseInt( prompt("bạn muốn xóa vị trí nào hử ?"))
   if(userDelete-1 < process.length && userDelete-1 >=0){
        process.splice(userDelete-1,1)
        for(let i=0;i< process.length;i++){
            console.log(`${i+1}.${process[i].name} \nComplete: ${process[i].complete}`) 
         }
     }
   else{
       alert("sai vị trí rồi má ơi má à!!!!!!!!!!!")
     }
    }
else{
    alert("Nhập quần què gì vậy má ??????????")
}
}

