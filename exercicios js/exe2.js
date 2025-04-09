function calcular(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            console.log(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            console.log(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case '*':
            console.log(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case '/':
            if (num2 !== 0) {
                console.log(`${num1} / ${num2} = ${num1 / num2}`);
            } else {
                console.log("Erro: Divisão por zero não é permitida.");
            }
            break;
        default:
            console.log("Operação inválida. Escolha entre +, -, * ou /.");
    }
}

// Exemplo de uso:
calcular(10, 5, '+'); 