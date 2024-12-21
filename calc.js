process.stdin.on('data', (input) => {
    const expression = input.toString().trim();

    if (expression.toLowerCase() === 'quit') {
        process.exit(0);
    }    
    try {
        const answer = eval(expression)
        console.log(answer);
        
    }
    catch (exception) {
        console.log('Invalid input');
        
    }
   process.stdout.write('Enter your expression: ') 
})
process.stdout.write('Enter your expression: ')