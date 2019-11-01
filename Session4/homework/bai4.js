let tudien = {
    any : "anh nguoi iu",
    bf : "boy friend"
}
let i =0
let p= Object.keys(tudien)
p.forEach((v,i) =>{
    console.log(`${i+1}: ${v}`)
}
)
while(i<2){
let input = prompt("Nhập vào từ mà bạn muốn tra").toLowerCase()
// for(let i=0;i< Object.keys(tudien).length;i++){
    if( Object.keys(tudien).includes(input))
    console.log(tudien[input])
else if(input == "e"){
        break
    }

else {
    let moi= prompt("từ bạn nhập không tồn tại bạn có muốn thêm từ này vào từ điển không ? Y/N").toLowerCase()
    if(moi == "y"){
        let nghia= prompt("nhập vào nghĩa của từ")
        tudien[input] = nghia
        console.log(Object.keys(tudien))
    }
    else{
        console.log("cảm ơn bạn")
    }
}

}   