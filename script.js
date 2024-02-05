function buttonclick(val){
    console.log(val)
    document.getElementById("input").value+=val
}
function buttonclear(){
    document.getElementById("input").value =""
}
function buttonanswer(){
    var text =document.getElementById("input").value
    var result=eval(text)
    document.getElementById("input").value = result
}