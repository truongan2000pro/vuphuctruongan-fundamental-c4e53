const is_inside = (a,b) => {
  if(a[0] > b[0] && a[1] > b[1]){
    return true
  }
  else if(a[0] > b[0]+b[2] || a[1] > b[1]+b[3]){
    return false
  } 
  else{
      return false
  }
    }
let checkList = is_inside([200,100], [140, 60, 100, 200])
console.log(checkList)
