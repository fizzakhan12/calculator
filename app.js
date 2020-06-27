function number(num){
    console.log(num)
        var result=document.getElementById("result")
        result.value +=num
    }
    
    function clearbtn(){
    
        var result=document.getElementById("result")
    result.value= "0"
    }
    
    function resultcalc(){
        var result=document.getElementById("result")
    result.value = eval(result.value)
    }