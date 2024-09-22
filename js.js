const floatingBalls = document.querySelector(".floating-balls");
const numBalls = 35;
const sections = document.querySelectorAll('.navItems');
const links = Array.from(sections);

window.addEventListener('scroll', function () {
  const scrollPosition = window.scrollY + 100; // Agrega un offset para compensar el tamaño de la barra de navegación

  links.forEach(link => {
    const sectionId = link.getAttribute('href');
    const targetSection = document.querySelector(sectionId);
    if (targetSection.offsetTop <= scrollPosition && targetSection.offsetTop + targetSection.offsetHeight > scrollPosition) {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
for (let i = 0; i < numBalls; i++) {
  createBall();
}

function createBall() {
  const ball = document.createElement("div");
  ball.className = "ball";

  const sizes = ["small", "medium", "large", "x-large"];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  ball.classList.add(randomSize);

  const randomX = Math.random() * window.innerWidth;
  const randomY = Math.random() * window.innerHeight;
  const randomSpeedX = (Math.random() * 0.5); // Velocidad horizontal aleatoria
  const randomSpeedY = (Math.random() * 0.5); // Velocidad vertical aleatoria

  ball.style.left = `${randomX}px`;
  ball.style.top = `${randomY}px`;
  ball.speedX = randomSpeedX; // Agregamos velocidad horizontal a la pelota
  ball.speedY = randomSpeedY; // Agregamos velocidad vertical a la pelota

  floatingBalls.appendChild(ball);
}

function animateBalls() {
  const balls = document.querySelectorAll(".ball");

  balls.forEach((ball) => {
    ball.style.left = `${parseFloat(ball.style.left) + ball.speedX}px`;
    ball.style.top = `${parseFloat(ball.style.top) + ball.speedY}px`;

    // Rebotar en los bordes de la ventana
    if (
      parseFloat(ball.style.left) + ball.clientWidth > window.innerWidth ||
      parseFloat(ball.style.left) < 0
    ) {
      ball.speedX *= -1;
    }
    if (
      parseFloat(ball.style.top) + ball.clientHeight > window.innerHeight ||
      parseFloat(ball.style.top) < 0
    ) {
      ball.speedY *= -1;
    }
  });

  requestAnimationFrame(animateBalls);
}

animateBalls();

document.addEventListener('DOMContentLoaded', () => {
  const skillsArray = [
    "Metodologías ágiles - Kanban",
    "Responsabilidad",
    "Iniciativa",
    "Creatividad",
    "Trabajo en equipo",
    "Pensamiento Crítico",
    "Diseño Web",
    "Diseño UX/UI",
    "Illustrator",
    "Photoshop",
    "HTML",
    "CSS",
    "JS",
    "Creacion de páginas Responsive",
    "Frameworks basados en JS (Vue - React)",
    "Programación Orientada a Objetos",
    "PHP",
    "Frameworks basados en PHP (Laravel - Yii)",
    "Base de datos relacionales",
    "Base de datos no relacionales",
    "Uso de APIs"
  ];
  const skillsContainer = document.getElementById('myskills');
  skillsArray.forEach(skill => {

    const skillDiv = document.createElement('div');
    skillDiv.className = 'col-12 col-md-4 py-2';
    skillDiv.innerHTML = `<p>${skill}</p>`;
    skillsContainer.appendChild(skillDiv);

  });
});
