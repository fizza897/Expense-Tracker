function categories(){
    var l=document.getElementById("jkl")
    var v=document.getElementById("jkl")
    if(
        l.value == sessionStorage.getItem("jkl")&&
        v.value == sessionStorage.getItem("jkl")
    ){
        alert("user added in succesfully")
        location.href="addcategories.html"
    } else{
        alert("Please sign up first")
        location.href="addcategories.html"
    }
}