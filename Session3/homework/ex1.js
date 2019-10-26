let i=0
let l=0
let shop=["áo","mũ"]
let s= prompt("Nhập vào chức năng bạn muốn: ").toLowerCase()
while(l<1){
if(s=="u" || s=="d" || s=="r" || s=="c"){
    if(s=="c"){
        l=2
    let them=prompt("Nhập món bạn thích")
    shop.push(them)
    shop.forEach((value, index) => {
        console.log(`${index+1} ${value}`)
    })
}
else if(s=="r"){
    l=2
    shop.forEach((value, index) => {
        console.log(`${index+1} ${value}`)
    })
}
else if(s=="u"){
    l=2
    let chon=prompt("Bạn muốn update theo index hay value").toLowerCase()
    if(chon=="index"){
        let so=parseInt(prompt("Nhập vào vị trí bạn muốn update: "))
        while(i<1){
        if(so<0||so > shop.length){
                so=parseInt(prompt("Giá trị index của bạn sai rồi nhập lại đi"))
            }
            else    {   
                let doi=prompt("Nhập và tên thứ mà bạn muốn đổi")
                 i=2
                shop[so-1] = doi
                shop.forEach((value, index) => {
                    console.log(`${index+1} ${value}`)
                })
        }
          }
        }
    else if(chon=="value"){
        let chu=prompt("Nhập vào tên món mà bạn muốn nó bị đổi: ")
       while(i<2){
        if(shop.indexOf(chu)==-1){
            chu=prompt("bạn nhập sai tên mà bạn muốn dổi rồi nhập lại đi")
        }
        else{
            i=2
            let thay=prompt("Nhập vào tên đồ mà bạn muốn đổi: ")
            shop[shop.indexOf(chu)]= thay
            shop.forEach((value, index) => {
                console.log(`${index+1} ${value}`)
            })        }
       }
    }
    }
    else if(s=="d"){
        l=2
        ask=prompt("Bạn muốn delete kiểu index hay value").toLowerCase()
        if(ask=="index"){
            let j=parseInt(prompt("Nhập vào vị trí bạn muốn xóa"))
            while(i<1){
            if(j<0 || j>shop.length){
                j=parseInt(prompt("Sai vị trí index ròi bạn nhập lại đi: "))
            }
            else{
                i=2
                shop.splice(j-1,1)
                shop.forEach((value, index) => {
                    console.log(`${index+1} ${value}`)
                })            }
        }
    }
        else if(ask=="value"){
            let c=prompt("Nhập vào tên đồ bạn muốn xóa")
            while(i<2){
                if(shop.indexOf(c)==-1){
                    c=prompt("tên bạn nhập vào để xóa ko tồn tại nhập lại đi")
                }
                else{
                    i=2
                    shop.splice(shop.indexOf(c),1)
                    shop.forEach((value, index) => {
                        console.log(`${index+1} ${value}`)
                    })            }
            }
        }
    }
}
else {
    s=prompt("Nhập sai phím rồi nhập lại đi: ")
}
}
 
   
