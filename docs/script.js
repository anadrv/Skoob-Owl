// Adiciona um ouvinte de evento para o movimento do mouse
document.addEventListener("mousemove", function (e) {
    // Obtém a posição X do mouse
    const mouseX = e.clientX;
    // Obtém a posição Y do mouse
    const mouseY = e.clientY;

    // Seleciona todos os elementos com a classe "eye"
    const eyes = document.querySelectorAll(".eye");
    // Itera sobre cada elemento "eye"
    eyes.forEach(eye => {
        // Obtém as dimensões e a posição do elemento "eye"
        const eyeRect = eye.getBoundingClientRect();
        // Calcula a posição X do centro do olho
        const eyeX = eyeRect.left + eyeRect.width / 2;
        // Calcula a posição Y do centro do olho
        const eyeY = eyeRect.top + eyeRect.height / 2;

        // Calcula a diferença entre a posição do mouse e a posição do olho
        const dx = mouseX - eyeX;
        const dy = mouseY - eyeY;
        // Calcula o ângulo entre o olho e o mouse em graus
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);

        // Calcula a distância de movimento dos olhos, limitando a 10px
        const distance = Math.min(Math.sqrt(dx * dx + dy * dy) / 10, 10);

        // Calcula a nova posição X dos olhos
        const moveX = distance * Math.cos(angle * (Math.PI / 180));
        // Calcula a nova posição Y dos olhos
        const moveY = distance * Math.sin(angle * (Math.PI / 180));

        // Aplica a transformação de translação ao elemento "eye"
        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Função para calcular o ângulo entre dois pontos (cx, cy) e (ex, ey)
function angle(cx, cy, ex, ey) {
    // Calcula a diferença Y entre os pontos
    const dy = ey - cy;
    // Calcula a diferença X entre os pontos
    const dx = ex - cx;
    // Calcula o ângulo em radianos
    let theta = Math.atan2(dy, dx);
    // Converte o ângulo para graus
    theta *= 180 / Math.PI;
    // Retorna o ângulo em graus
    return theta;
}
