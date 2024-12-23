const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function question() {
    rl.question('Enter your Expression: ', (input) => {

        const expression = input.trim();
        if (expression.toLowerCase() === 'quit') {
            rl.close();
        } else {
            try {
                const useroutput = eval(expression)
                console.log(useroutput);
            }
            catch (error) {
                console.log(error);
                
            }
            
        question();
        }
    
        

    })
}
question();
