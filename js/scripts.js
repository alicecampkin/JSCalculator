

function operate(a,b,op){

    let result = null;
    let A = parseFloat(a,10);
    let B = parseFloat(b,10);

    switch (op){
        case "+":
            result =  A+B;
        break 

        case "x":
            result = A*B;
        break
            
        case "-":
            result = A-B;
        break  
        
        case "/":
            result = A/B;
        break 
        
    }
    return result;
    
}


function myFunction(e){

    let varDisplay = document.querySelector('#idDisplay');
    let varButtonPressed = e.target.textContent;
    let varClass = e.target.className;


    if (varClass == 'clNum'){

        if (lastButton=='Operator'){
            varDisplay.textContent = null;
            varDots = 0;
        }

        // allow only one decimal place per number
        if (varButtonPressed == "."){
            varDots = varDots + 1;
        }

        if (varDots<2){
        varDisplay.textContent = varDisplay.textContent + varButtonPressed;
        lastButton = 'Number';
        }
        


    } else if(varClass == 'clOp'){
    //else if(varButtonPressed == '+' || varButtonPressed=='x' || varButtonPressed=='/' || varButtonPressed=="-"){

            if (lastButton=='Number'){

                buttonArray.push(varDisplay.textContent,varButtonPressed);
            } 

            if (lastButton='Operator'){

                if(buttonArray.length>1){
                    buttonArray.pop();
                    buttonArray.push(varButtonPressed);

                } else if (varButtonPressed=='+' || varButtonPressed=='-'){
                    buttonArray.push('0',varButtonPressed);
                }
            }
            
            lastButton = 'Operator';
        
    } else if (varButtonPressed=="clear"){
        varDisplay.textContent=null;
        buttonArray = [];
        lastButton=null;

    } else if(varButtonPressed=="="){

        if (buttonArray.length>1){
        buttonArray.push(varDisplay.textContent);
        lastButton='Operator';
        }

    } else{
        console.log("Houston, we have a snaffoo...");
    }

    console.log(buttonArray);

    if (buttonArray.length>=3){

        a = buttonArray.shift();
        op= buttonArray.shift();
        b = buttonArray.shift();

        varResult = operate(a,b,op);
        varDisplay.textContent = varResult;

        buttonArray.unshift(varResult.toString(10));
        console.log(buttonArray);

    } 

    
}


console.log("JS reporting for duty, maam")
let buttonArray = [];
let lastButton = null;
let varResult = null;
let varDots = null;

const varButtons = Array.from(document.querySelectorAll("button"));

varButtons.forEach(press => press.addEventListener("click",myFunction));

console.log(varButtons);