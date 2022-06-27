function add(){
    var a=document.getElementById("abc");
    var b=document.getElementById("abc")

    if(
        a.value == sessionStorage.getItem("jkl")&&
        b.value == sessionStorage.getItem("jkl")
    ){
        alert("user added in succesfully")
        location.href="addcategories.html"
    }}