//Bai 1
function findOpposite(n, input){
    //cach 1
    //return input + (n/2) * ((input >= n/2) ? (-1) : 1); 
    //cach 2
    return ((input % (n/2)) * 2 + n/2) - input;
}

//Bai 2
function mergeString (a, b){
    var result = "";
    var i = 0;
    while (i < a.length || i < b.length){
        result += ((i < a.length) ? a.charAt(i) : "");
        result += ((i < b.length) ? b.charAt(i) : "");
        i++;
    }
    return result;
}