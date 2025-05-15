window.onload = function () {
    const botao = document.getElementById("calcular");

    botao.addEventListener("click", function () {
        const nota1 = document.getElementById("nota1").value;
        const nota2 = document.getElementById("nota2").value;
        const nota3 = document.getElementById("nota3").value;
        const nota4 = document.getElementById("nota4").value;
        const resultado = document.getElementById("resultado");

        // Verificando se algum campo está vazio
        if (nota1 === "" || nota2 === "" || nota3 === "" || nota4 === "") {
            resultado.textContent = "Por favor, preencha todos os campos.";
            return;
        }

        // Convertendo para números
        const n1 = parseFloat(nota1);
        const n2 = parseFloat(nota2);
        const n3 = parseFloat(nota3);
        const n4 = parseFloat(nota4);

        // Calculando a média
        const media = (n1 + n2 + n3 + n4) / 4;

        resultado.textContent = `A média é: ${media.toFixed(2)}`;
    });
};