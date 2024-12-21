import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

function question(query) {
    return new Promise(resolve => {
        rl.question(query, resolve);
    } )
}

let equation = await question('Enter an equation: ');

while (equation.toLowerCase() !== 'quit') {
    try {
        const answer = eval(equation);
        console.log(`Answer: ${answer}`);
    }
    catch (error) {
        console.log('Invalid equation');
    }
    equation = await question('Enter an equation: ');
}
rl.close();