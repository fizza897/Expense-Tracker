function logOut(){
    var a=document.getElementById("jkl")
    var b=document.getElementById("jkl")
    if(
        a.value == localStorage.getItem("jkl")&&
        b.value == localStorage.getItem("jkl")
    ){
    }else{
        location.href="about.html"
    }
}