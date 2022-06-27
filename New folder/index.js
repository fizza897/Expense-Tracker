function foo(){
    var a=document.getElementById("xyz").value
    var b=document.getElementById("xyz").value
if(
    a.value == window.localStorage.getItem("firstname", "fizza")&&
    b.value == window.localStorage.getItem("lastname","Azam")
){
    alert("user signed in succesfully")
} else{
    alert("Please sign up first")
    location.href="text.html"
}
}
function foo2(){
    var e =document.getElementById("asd")
    document.write(e)
}

function SignUp(){
var l=document.getElementById("xyz")
var v=document.getElementById("xyz")
if(
    l.value == localStorage.getItem("xyz")&&
    v.value == localStorage.getItem("xyz")
){
    alert("user signed in succesfully")
} else{
    alert("Please sign up first")
    location.href="text.html"
}
}

function SignIn(){
    var x=document.getElementById("xyz")
    var y=document.getElementById("xyz")
    if(
        x.value == localStorage.getItem("xyz")&&
        y.value == localStorage.getItem("xyz")
    ){
    }else{
        location.href="about.html"
    }
}




