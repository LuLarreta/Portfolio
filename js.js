const floatingBalls = document.querySelector(".floating-balls");
const numBalls = 35;
const sections = document.querySelectorAll('.barraItems');
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
  const randomSpeedX = (Math.random() * 0.5  ) ; // Velocidad horizontal aleatoria
  const randomSpeedY = (Math.random()  * 0.5 ) ; // Velocidad vertical aleatoria

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
