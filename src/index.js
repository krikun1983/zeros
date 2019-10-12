module.exports = function zeros(expression) {

    //create counter 2 and 5
    let numberTwo = 0; 
    let numberFive = 0; 
    //create array from string without symbol '*'
    let array = expression.split('*'); 
    //create cycle for pluck array
    for (let i = 0; i < array.length; i += 1) {
        //if symbol ! = 1;
        if (array[i].indexOf('!') === array[i].length - 1) { 
            //create variable without symbol '!';
            let withSymbolOne = array[i].slice(0, array[i].length - 1); 
            
            //create cycle for pluck variable withSymbolOne
            for (let j = 0; j <= withSymbolOne; j += 1) {
                //if j % 5 then numberFive + 1
                if (j % 5 === 0) {                      
                    let number = j; 
                    while ((number >= 5) && (number % 5 === 0)) {
                        number = number / 5;
                        numberFive += 1;
                    } 
                } 
                //if j % 2 then numberTwo + 1
                if (j % 2 === 0) {
                    let number = j;
                    while ((number >= 2) && (number % 2 === 0)) {
                        number = number / 2;
                        numberTwo += 1;
                    } 
                }
            }
        } 
        //if symbol ! = 2; 
        if (array[i].indexOf('!') === array[i].length - 2) {
            //create variable without symbol '!!';
            let withSymbolTwo = array[i].slice(0, array[i].length - 2);
            //if number of variable withSymbolTwo not % 2
            if (withSymbolTwo % 2 !== 0) {
                //create cycle for pluck number of variable withSymbolTwo - odd
                for (let j = 1, k = 1; j <= withSymbolTwo; j = k * 2 - 1) {
                  
                    k += 1;
                    //if j % 5 then numberFive + 1
                    if (j % 5 == 0) {
                        let number = j;
                        while ((number >= 5) && (number % 5 === 0)) {
                            number = number / 5;
                            numberFive += 1;
                        }
                    }
                }
            } 
            //if number of variable withSymbolTwo % 2
            if (withSymbolTwo % 2 === 0) {
                //create cycle for pluck number of variable withSymbolTwo - even
                for (let j = 1, k = 1; j <= withSymbolTwo; j = k * 2) {
                  
                    k += 1;
                    //if j % 5 then numberFive + 1
                    if (j % 5 === 0) {
                        let number = j;
                        while ((number >= 5) && (number % 5 === 0)) {
                            number = number / 5;
                            numberFive += 1;
                        }
                    } 
                    //if j % 2 then numberTwo + 1
                    if (j % 2 === 0) {
                        let number = j;
                        while ((number >= 2) && (number % 2 === 0)) {
                            number = number / 2;
                            numberTwo += 1;
                        }
                    }
                }
            }
        }
        
    }
    return Math.min(numberTwo, numberFive);
}
