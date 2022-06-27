function Added(){
   var a=document.getElementById("abc")
   var b=document.getElementById("abc")
   if(
       a.value == localStorage.getItem("abc")&&
       b.value == localStorage.getItem("abc")
   ){
       location.href="index.html"
   } else{
       location.href="added.html"
    }
}
function Added2(){
    var g=document.getElementById("abc")
    var h=document.getElementById("abc")
    if(
        g.value == localStorage.getItem("abc")&&
        h.value == localStorage.getItem("abc")
    ){
        location.href="index.html"
    } else{
        location.href="categories.html"
 }
}

function Add3(){
    var b=document.getElementById("cde")
    document.write(b)
}
function Add3(){
    var c=document.getElementById("fgh")
    document.write(c)
}
