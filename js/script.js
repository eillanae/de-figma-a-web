// arrastrar las fotos (solo en pantalla grande)
const tablero = document.querySelector('.tablero');
const pantallaGrande = window.matchMedia('(min-width: 901px)');
let encima = 10;

if (tablero) {
  tablero.querySelectorAll('.polaroid').forEach((foto) => {
    let inicioX, inicioY, izquierda, arriba, movida;
    let arrastrando = false;

    foto.addEventListener('pointerdown', (e) => {
      if (!pantallaGrande.matches) return;
      inicioX = e.clientX;
      inicioY = e.clientY;
      izquierda = foto.offsetLeft;
      arriba = foto.offsetTop;
      movida = false;
      arrastrando = true;
      foto.setPointerCapture(e.pointerId);
      foto.classList.add('levantada');
      foto.style.zIndex = ++encima;
    });

    foto.addEventListener('pointermove', (e) => {
      if (!arrastrando) return;
      const dx = e.clientX - inicioX;
      const dy = e.clientY - inicioY;
      if (Math.abs(dx) + Math.abs(dy) > 4) movida = true;
      foto.style.left = izquierda + dx + 'px';
      foto.style.top = arriba + dy + 'px';
    });

    foto.addEventListener('pointerup', () => {
      arrastrando = false;
      foto.classList.remove('levantada');
    });

    foto.addEventListener('click', (e) => {
      if (movida) e.preventDefault();
    });
  });
}


// filtros
const filtros = document.querySelectorAll('.filtro');
const tarjetas = document.querySelectorAll('.tarjeta');

filtros.forEach((boton) => {
  boton.addEventListener('click', () => {
    filtros.forEach((b) => b.classList.remove('activo'));
    boton.classList.add('activo');

    const filtro = boton.dataset.filtro;

    tarjetas.forEach((tarjeta) => {
      const coincide = filtro === 'todos' || tarjeta.dataset.categoria === filtro;
      tarjeta.classList.toggle('oculta', !coincide);
    });
  });
});


// formulario (no envía nada)
const formulario = document.querySelector('.formulario');
const aviso = document.querySelector('.aviso');

if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    aviso.textContent = `¡Recibido, ${nombre}! Te contesto pronto ✉`;
    formulario.reset();
  });
}


// año
document.querySelector('#anio').textContent = new Date().getFullYear();
