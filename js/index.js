function myArraySplice() {
     var numArray = [1,2,3,4,5,6,7,8,9];
    numArray.sort(function compare(first, second){
        return first - second;
    });
    
    numArray.splice(2,0,2.5);
    
    window.alert(numArray.splice(5,3).toString());
    window.alert(numArray.toString());
}
       