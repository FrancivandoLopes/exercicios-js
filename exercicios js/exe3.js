function verificarNota(nota) {
    if (nota >= 7 && nota <= 10) {
        console.log("Aprovado");
    } else if (nota >= 5 && nota < 7) {
        console.log("Recuperação");
    } else if (nota >= 0 && nota < 5) {
        console.log("Reprovado");
    } else {
        console.log("Nota inválida. Insira um valor entre 0 e 10.");
    }
}

// Exemplo de uso:
verificarNota(6.5);