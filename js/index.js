let slideIndex = 0;
  const carousel = document.getElementById('carousel');
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  /* Mover el carrusel */
  function moveSlide(direction) {
    slideIndex = (slideIndex + direction + totalItems) % totalItems;
    const offset = -slideIndex * items[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }

  /* Ajustar el índice en resize */
  window.addEventListener('resize', () => {
    const offset = -slideIndex * items[0].clientWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  });

  


document.addEventListener('DOMContentLoaded', function() {
  
  /* Cambio automático (opcional) */
  setInterval(() => moveSlide(1), 5000);

  // Fuerza la recalculación de las posiciones
  setTimeout(function() {
    AOS.refreshHard();
  }, 100);

    // Fecha del evento en formato dd/mm/aaaa
    const eventoFecha = '22/11/2024';
  
    // Función para convertir la fecha en un objeto Date
    function convertirFecha(fecha) {
      const partes = fecha.split('/');
      const dia = parseInt(partes[0], 10);
      const mes = parseInt(partes[1], 10) - 1; // Los meses en JavaScript son 0-11
      const anio = parseInt(partes[2], 10);
      return new Date(anio, mes, dia);
    }
  
    // Fecha del evento como objeto Date
    const cuentaAtrasFecha = convertirFecha(eventoFecha);
  
    // Función para actualizar el contador
    function actualizarContador() {
      const ahora = new Date().getTime();
      const distancia = cuentaAtrasFecha - ahora;
  
      // Calcular días, horas, minutos y segundos
      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  
      // Mostrar los resultados
      document.getElementById('dias').innerHTML = dias;
      document.getElementById('horas').innerHTML = horas;
      document.getElementById('minutos').innerHTML = minutos;
      document.getElementById('segundos').innerHTML = segundos ;
  
      // Si el contador ha terminado
      if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById('dias').innerHTML = '0';
        document.getElementById('horas').innerHTML = '0';
        document.getElementById('minutos').innerHTML = '0';
        document.getElementById('segundos').innerHTML = '0';
      }
    }
  
    // Actualizar el contador cada segundo
    const intervalo = setInterval(actualizarContador, 1000);

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
    
  });
  