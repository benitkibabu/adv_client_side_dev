function myArraySplice() {
     var numArray = [1,2,3,4,5,6,7,8,9];
    numArray.sort(function compare(first, second){
        return first - second;
    });
    
    numArray.splice(2,0,2.5);
    
    /*
    window.alert(numArray.splice(5,3).toString());
    window.alert(numArray.toString());*/
    
    var val = "this is a string".slice(2, 5);
    var tag = document.getElementById("label");
    tag.innerHTML = "<h2>" + val + "</h2>";
    
    
}

function checkVal(){
    var val = document.getElementById("mval").value;
    var test = new RegExp("//d//d//d$");
    if(!val){}
}

function median(array){
    array.sort(function(a,b){
        return a-b;
    });
    var middle = Math.floor(array.length/2);
    if(array.length % 2){
        return array[middle];
    }else{
        return array[middle-1] + array[middle] / 2.0; 
    }
}

var list = [1,3,5,7,9];
median(list);

function validate(){
    var input = document.getElementById("phone").value;
    var expression = new RegExp("^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$");
    if(!expression.test(input)){
        alert("not valid phone number");
    }
}