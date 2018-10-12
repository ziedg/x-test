/*
f1   : function(a,b)  :  c []
params :
  a: string[]
  b:string[]
    return 
    c : int []

*/


module.exports =  (a, b) => {
    result = []
    for (let i of a) {
        let nb = 0
        for (let j of b) {
            if (j === i) {
                nb++
            }
        }

        result.push(nb);
        nb = 0;

    }
    return result;


}

