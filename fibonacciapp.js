/*TEAM MEMBERS
1. Collines Mukasa
2. Wamanga Peter
3. Eugenia Musiimemaria */

module.exports = class Fibonacci {
    computeFibonacci(num){
        if (num < 0) {
            throw new Error('The Parameter must be positive!');
        }
         else if (num == 0) {
            return 0;
        } else if (num == 1)  {
            return 1;
        } 
        else if (num >= 2)  {
            let arr = [0, 1];
            for (let i = 2; i < num + 1; i++){
                arr.push(arr[i - 2] + arr[i - 1]);
            }
            return arr[arr.length-1]
            ;
        }
    }
}


