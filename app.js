const buttons = document.querySelectorAll('button')
const screen = document.getElementById('screen')
var ans=0

function factorial(n){
    var ans=1;
        
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

for (let btn of buttons){
    btn.addEventListener('click', (e)=>{
        const buttonText = e.target.innerText;
        if (buttonText==='C'){
            ans=screen.value
            screen.value=""
        }
        else if(buttonText==='x'){
            screen.value+='*'
        }
        else if(buttonText==='='){
            try{
                screen.value = eval(screen.value)
            } catch(e){
                console.log("Invalid Input");
                console.log(e.message)
                screen.value="Invalid Input"
            }
            
        }
        else if (buttonText==='x!'){
            try{
                screen.value = eval(screen.value)
                screen.value = factorial(screen.value)
            } catch(e){
                console.log("Invalid Input");
                console.log(e.message)
                screen.value="Invalid Input"
            }
        }
        else if(buttonText==='sin'){
            screen.value += 'Math.sin'
        }

        else if(buttonText==='cos'){
            screen.value += 'Math.cos'
        }
        else if(buttonText==='tan'){
            screen.value += 'Math.tan'
        }
        else if (buttonText==='Ans'){
            screen.value = ans
        }
        else if (buttonText==='sin<sup>-1</sup>'){
            screen.value += 'Math.asin'
        }
        else if (buttonText==='cos<sup>-1</sup>'){
            screen.value += 'Math.acos'
        }
        else if (buttonText==='tan<sup>-1</sup>'){
            screen.value += 'Math.atan'
        }
        else if (buttonText==='ln'){
            screen.value += 'Math.log'
        }
        else if (buttonText==='log'){
            screen.value += 'Math.log10'
        }
        else if (buttonText==='√'){
            screen.value += 'Math.sqrt'
        }
        else if (buttonText==='e'){
            screen.value += 'Math.E'
        }
        else if (buttonText==='π'){
            screen.value += 'Math.PI'
        }

        else{
            screen.value+=buttonText
        }
        
    })
}