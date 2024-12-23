process.stdin.on('data', (input) => {

    const userInput = input.toString().trim()
    
    if (userInput.toLowerCase() === 'quit') {
        process.exit(0);
    }
    answer = eval(userInput)

    console.log(answer);

 process.stdout.write('Enter your expression: ');   
    
})
process.stdout.write('Enter your expression: ');