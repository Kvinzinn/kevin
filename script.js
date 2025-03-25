function toggleAba() {
    var aba = document.querySelector(".sidebar");
    
    // Alterna entre abrir e fechar a aba lateral
    if (aba.style.left === "0px") {
        aba.style.left = "-250px"; // Aba vai para fora da tela (fechando)
    } else {
        aba.style.left = "0"; // Aba vai para a posição inicial (abrindo)
    }
}
