
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';


const rl = readline.createInterface({ input, output })


function question(query) {
    return new Promise(resolve => {
        rl.question(query, resolve)
    })
}

let equation = await question('Enter your Expression: ');

while (equation !== 'quit') {
    try {
        const useroutput = eval(equation)
        console.log(useroutput);

    }
    catch (error) {
        console.log(error);
        
    }
    equation = await question('Enter your Expression: ');
}

rl.close();
