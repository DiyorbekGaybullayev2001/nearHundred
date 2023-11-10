

let btn = document.getElementById("btn")

btn.onclick = function nearHundred(){
    let n = document.getElementById("son").value
    let p = document.getElementById("par")
    let son1 = Math.abs(n-100)
    let son2 = Math.abs(n-200)
    
    if (son1<=10){
      return p.innerHTML = true;
    }
    if(son2<=10){
      return p.innerHTML = true;
    }
    return p.innerHTML = false; 
  }