// cursor.js

// Seleciona o elemento do efeito do cursor
const cursorShadow = document.querySelector('.cursor-shadow');

// Variáveis para animação suave
let mouseX = 0;
let mouseY = 0;
let posX = 0;
let posY = 0;

// Captura a posição atual do mouse
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Função de animação
function animate() {
  posX += (mouseX - posX) / 8;
  posY += (mouseY - posY) / 8;

  cursorShadow.style.transform = `translate(${posX - 25}px, ${posY - 25}px)`;

  requestAnimationFrame(animate);
}

animate();

// Aumenta o efeito ao passar sobre elementos interativos
document
  .querySelectorAll('a, button, input, textarea, select, label')
  .forEach((elem) => {
    elem.addEventListener('mouseover', () => {
      cursorShadow.classList.add('custom-cursor--hover');
    });
    elem.addEventListener('mouseout', () => {
      cursorShadow.classList.remove('custom-cursor--hover');
    });
  });
