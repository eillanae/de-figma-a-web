// filtros
const filtros = document.querySelectorAll('.filtro');
const filas = document.querySelectorAll('.fila');

filtros.forEach((boton) => {
  boton.addEventListener('click', () => {
    filtros.forEach((b) => b.classList.remove('activo'));
    boton.classList.add('activo');

    const filtro = boton.dataset.filtro;

    filas.forEach((fila) => {
      const coincide = filtro === 'todos' || fila.dataset.categoria === filtro;
      fila.classList.toggle('oculta', !coincide);
    });
  });
});


// imagen que sigue al ratón en el índice
const vista = document.querySelector('.vista-previa');
const conRaton = window.matchMedia('(hover: hover) and (min-width: 701px)');

if (vista) {
  filas.forEach((fila) => {
    fila.addEventListener('mouseenter', () => {
      if (!conRaton.matches) return;
      vista.className = 'vista-previa visible ' + fila.dataset.color;
      vista.querySelector('span').textContent = fila.dataset.pie;
    });

    fila.addEventListener('mouseleave', () => {
      vista.classList.remove('visible');
    });

    fila.addEventListener('mousemove', (e) => {
      vista.style.transform = `translate(${e.clientX + 24}px, ${e.clientY - 100}px)`;
    });
  });
}


// formulario (no envía nada)
const formulario = document.querySelector('.formulario');
const aviso = document.querySelector('.aviso');

if (formulario) {
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    aviso.textContent = `¡Recibido, ${nombre}! Te contesto pronto.`;
    formulario.reset();
  });
}


// ver la retícula
document.querySelector('.ver-reticula').addEventListener('click', () => {
  document.body.classList.toggle('con-reticula');
});


// año
document.querySelector('#anio').textContent = new Date().getFullYear();
