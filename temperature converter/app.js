
      

function convert(){
let temp=parseFloat(document.getElementById("inputvalue").value);
let fromU=document.getElementById("frominput"). value;
let toU=document.getElementById("toinput").value;
let resultElement=document.getElementById("result");
if(isNaN(temp)){
    resultElement. textContent="Please enter a valid number! ";
    return;
}
    let result;
    if(fromU===toU){
        resultElement. textContent=temp;
    }
    else if(fromU==="c" && toU==="f"){
        result=(temp*9/5)+32;
    }
    else if(fromU==="f" && toU==="c"){
        result=(temp-32)*5/9;
    }
    else if(fromU==="c"&& toU==="k"){
        result=(temp+273.15);
    }
    else if(fromU==="k" &&  toU==="c"){
        result=(temp-273.15);
    }
    else if(fromU==="k" && toU==="f"){
        result=(temp-273.15)*9/5+32;
    }
    else if(fromU==="f" && toU==="k"){
        result=(temp-32)*5/9+273.15;
    }
    else{
   resultElement. textContent= ("not valid");
    
    return ;
    }
    let symbol;
    if(toU==="c")symbol="°C";
    else if(toU==="f")symbol="°F";
    else if(toU==="k")symbol="°K";
    resultElement.textContent=`Result =>   
       ${result.toFixed(2)}${symbol}`
       
          
}



