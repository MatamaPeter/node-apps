process.stdin.on('data', (input) => {
    sum = input.toString().trim();

    if (sum.toLowerCase() === 'exit') {
        process.exit(0);
    }
    try {
        const sumOutput = eval(sum);
        console.log(sumOutput);
        
    } catch (exception) {
        console.log('Error: ' + exception.message);
    }
process.stdout.write('Enter your input: ');
})
process.stdout.write('Enter your input: ');