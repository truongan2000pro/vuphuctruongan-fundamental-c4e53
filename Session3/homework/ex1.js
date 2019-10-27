let i=0
let t=0
let shop=["áo","mũ"]
    for(let l=0;l<2;){
    let s= prompt("Nhập vào chức năng bạn muốn: C/R/U/D ").toLowerCase()
    if(s == "c"){
    let them=prompt("Nhập món bạn thích")
    shop.push(them)
        console.log(`đồ của chúng tôi có: ${shop}`)
}
else if(s=="r"){
    console.log(`đồ của chúng tôi có: ${shop}`)
    }
else if(s=="u"){
    let chon=prompt("Bạn muốn update theo index hay value").toLowerCase()
    if(chon=="index"){
        let so=parseInt(prompt("Nhập vào vị trí bạn muốn update: "))
        for(let i=0;i<2;){
        if(so<0||so > shop.length){
                so=parseInt(prompt("Giá trị index của bạn sai rồi nhập lại đi"))
            }
            else    {   
                let doi=prompt("Nhập và tên thứ mà bạn muốn đổi")
                shop[so-1] = doi
                console.log(`đồ của chúng tôi có: ${shop}`)
                i=2
            }
          }
        }
    else if(chon=="value"){
        let chu=prompt("Nhập vào tên món mà bạn muốn nó bị đổi: ")
        for(let i=0;i<2;){
            if(shop.indexOf(chu)==-1){
            chu=prompt("bạn nhập sai tên mà bạn muốn dổi rồi nhập lại đi")
        }
        else{
            let thay=prompt("Nhập vào tên đồ mà bạn muốn đổi: ")
            shop[shop.indexOf(chu)]= thay
            console.log(`đồ của chúng tôi có: ${shop}`)
            i=2
        }
       }
    }
    }
    else if(s=="d"){
            ask=prompt("Bạn muốn delete kiểu index hay value").toLowerCase()
        if(ask=="index"){
            let j=parseInt(prompt("Nhập vào vị trí bạn muốn xóa"))
            for(let i=0;i<2;){
            if(j<0 || j>shop.length){
                j=parseInt(prompt("Sai vị trí index ròi bạn nhập lại đi: "))
            }
            else{
                shop.splice(j-1,1)
                console.log(`đồ của chúng tôi có: ${shop}`)
                i=2
            }
        }
    }
    else if(ask=="value"){
            let c=prompt("Nhập vào tên đồ bạn muốn xóa")
            for(let i=0;i<2;){
            if(shop.indexOf(c)==-1){
                    c=prompt("tên bạn nhập vào để xóa ko tồn tại nhập lại đi")
                }
                else{
                    shop.splice(shop.indexOf(c),1)
                    console.log(`đồ của chúng tôi có: ${shop}`)
                    i=2
}
}
}
}
}


   
