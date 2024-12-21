const { log } = require('console');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function solve() {

    rl.question('Enter your equation: ', (input) => {
        const equation = input.trim();
        if (equation === 'quit') {
            rl.close();
        } else {
            try {
                const answer = eval(equation);
                console.log(`The answer is: ${answer}`);
            }
            catch (error) {
                console.log('Invalid Equation');
            }
            solve();
        }

    })
}
solve();