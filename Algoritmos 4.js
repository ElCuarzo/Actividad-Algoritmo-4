var array =[1,2,3,4,5,6,7,8,9,10,11] ;
var y = 2;
function Sumavaloresmayorque(){
    var sumavalores= 0;
    for (var i = 0; i < array.length ; i++){
        if (array[i] > y){
            sumavalores += array[i]
        }
    }
    return sumavalores
}
console.log(Sumavaloresmayorque(array))


var array = [1,2,3,4,5,6,7];
function minavgmax(array) {
    var min = array[0];
    var max = array[0];
    var suma = 0;
    for (var i = 0; i < array.length; i++) {
        suma += array[i];
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    var avg = suma / array.length;
    return [min, avg, max];
}
console.log(minavgmax(array));


var array = [1,2,-3,-5,5];
function devolvervalornegativo(){
    var newarray = [];
    for (var i = 0; i < array.length ; i++){
        if (array[i] < 0 ){
            newarray.push("Dojo");
        }
        else {
            newarray.push(array[i]);
        }
    }
    return newarray
}
console.log(devolvervalornegativo(array))


var array = [20,30,40,50,60,70];
function removerrango(){
    var newarray = [];
    for( var i = 0 ; i < array.length ; i++ ){
        if ( array[i] == array[0]){
            newarray.push(array[i])
        }
        else if ( array[i] == array[1]){
            newarray.push(array[i])
        }
        else if  ( array[i] == array[5]){
            newarray.push(array[i])
        }
    }
    return newarray
}
console.log(removerrango(array))