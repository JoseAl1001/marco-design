function activarPagina() {
  const corazon = document.getElementById("corazon-v3");
  const pantallaInicial = document.getElementById("pantalla-inicial");
  const seccion2 = document.getElementById("seccion2");

  corazon.style.animation = "none";

  const audio = document.getElementById("musica");
  if (audio.readyState >= 2) audio.play();

  pantallaInicial.style.opacity = "1";
  pantallaInicial.style.transition = "opacity 1.5s ease";
  pantallaInicial.style.opacity = "0";

  setTimeout(() => {
    pantallaInicial.style.display = "none";
    seccion2.style.display = "flex";

    setTimeout(() => {
      seccion2.style.opacity = "1";
      mostrarPoema();

      setTimeout(() => {
        generarPetalos("petalos-container");
      }, 500);
    }, 100);
  }, 1500);
}

function mostrarPoema() {
  const poema = "Cada pétalo que cae susurra tu nombre, Brisell… porque incluso el viento sabe que eres mi Princesa.";
  const contenedor = document.getElementById("poema-container");

  contenedor.classList.add("precarga");
  const palabras = poema.split(" ");

  palabras.forEach((palabra) => {
    const span = document.createElement("span");
    span.textContent = palabra + " ";
    contenedor.appendChild(span);
  });

  setTimeout(() => {
    contenedor.classList.remove("precarga");
    contenedor.innerHTML = "";

    palabras.forEach((palabra, i) => {
      const span = document.createElement("span");
      span.textContent = palabra + " ";
      span.classList.add("palabra-poema");
      span.style.animationDelay = `${i * 0.4}s`;
      contenedor.appendChild(span);
    });

    const duracionTotal = palabras.length * 0.4 * 1000;
    setTimeout(() => {
      mostrarSeccion3();
    }, duracionTotal + 3000);
  }, 300);
}

function mostrarSeccion3() {
  const seccion2 = document.getElementById("seccion2");
  const seccion3 = document.getElementById("seccion3");
  const frase = "Aunque el tiempo ha sido breve y los kilómetros largos, cada encuentro contigo ha sembrado un girasol en mi corazón.";
  const contenedor = document.getElementById("frase-seccion3");

  seccion2.style.transition = "opacity 2s ease";
  seccion2.style.opacity = "0";

  setTimeout(() => {
    seccion2.style.display = "none";
    seccion3.style.display = "flex";
    seccion3.style.opacity = "0";
    document.body.classList.add("seccion3-activa");

    generarPetalos("petalos-container-seccion3");

    setTimeout(() => {
      seccion3.style.transition = "opacity 2s ease";
      seccion3.style.opacity = "1";

      contenedor.classList.add("precarga");
      const palabras = frase.split(" ");

      palabras.forEach((palabra) => {
        const span = document.createElement("span");
        span.textContent = palabra + " ";
        contenedor.appendChild(span);
      });

      setTimeout(() => {
        contenedor.classList.remove("precarga");
        contenedor.innerHTML = "";

        palabras.forEach((palabra, i) => {
          const span = document.createElement("span");
          span.textContent = palabra + " ";
          span.classList.add("palabra-poema");
          span.style.animationDelay = `${i * 0.4}s`;
          contenedor.appendChild(span);
        });

        const duracionTotal = palabras.length * 0.4 * 1000;
        setTimeout(() => {
          const seccion4 = document.getElementById("seccion4");

          seccion3.style.transition = "opacity 2s ease";
          seccion3.style.opacity = "0";

          setTimeout(() => {
            seccion3.style.display = "none";
            seccion4.style.display = "flex";
            seccion4.style.opacity = "0";
            document.body.classList.add("seccion4-activa");
            generarLuciernagas();
            generarCampoGirasoles();

            setTimeout(() => {
              seccion4.style.transition = "opacity 2s ease";
              seccion4.style.opacity = "1";
              iniciarCieloEstrellado();
            }, 100);
          }, 2000);
        }, duracionTotal + 3000);
      }, 300);
    }, 100);
  }, 2000);
}

function generarPetalos(contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  const imagenes = [
    "resource/image/petalos/petalo1.webp",
    "resource/image/petalos/petalo2.webp",
    "resource/image/petalos/petalo3.webp",
    "resource/image/petalos/petalo4.webp",
    "resource/image/petalos/petalo5.webp"
  ];

  const total = window.innerWidth < 768 ? 12 : 25;
  const inicial = Math.floor(total * 0.3);
  const restante = total - inicial;

  for (let i = 0; i < inicial; i++) {
    crearPetalo(contenedor, imagenes);
  }

  setTimeout(() => {
    for (let i = 0; i < restante; i++) {
      crearPetalo(contenedor, imagenes);
    }
  }, 1000);
}

function crearPetalo(contenedor, imagenes) {
  const petalo = document.createElement("img");
  petalo.classList.add("petalo-img");
  petalo.src = imagenes[Math.floor(Math.random() * imagenes.length)];

  const startX = Math.random() * window.innerWidth;
  petalo.style.left = `${startX}px`;
  petalo.style.top = `-60px`;

  const duracion = 6 + Math.random() * 4;
  petalo.style.setProperty('--duracion', `${duracion}s`);
  petalo.style.animationDelay = `${Math.random() * 5}s`;

  const escala = Math.random() * 0.6 + 0.4;
  const rotacionInicial = Math.random() < 0.5 ? -30 : 30;
  const rotacionFinal = rotacionInicial * 8;
  const desplazamientoX = -100 - Math.random() * 100;

  petalo.style.transform = `scale(${escala})`;
  petalo.style.setProperty('--inicio-rotacion', `${rotacionInicial}deg`);
  petalo.style.setProperty('--fin-rotacion', `${rotacionFinal}deg`);
  petalo.style.setProperty('--desplazamiento-x', `${desplazamientoX}px`);

  contenedor.appendChild(petalo);
}

function generarLuciernagas() {
  const contenedor = document.getElementById("luciernagas-container");

  for (let i = 0; i < 30; i++) {
    const luciernaga = document.createElement("div");
    luciernaga.classList.add("luciernaga");

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    luciernaga.style.left = `${x}px`;
    luciernaga.style.top = `${y}px`;
    luciernaga.style.animationDelay = `${Math.random() * 10}s`;

    contenedor.appendChild(luciernaga);
  }
}

function generarCampoGirasoles() {
  const contenedor = document.getElementById("campo-girasoles");
  const imagenes = [
    "resource/image/girasoles/girasol1.png",
    "resource/image/girasoles/girasol2.png",
    "resource/image/girasoles/girasol3.png"
  ];

  let girasolesData = JSON.parse(localStorage.getItem("campoGirasoles"));

  if (!girasolesData) {
    const total = Math.floor(window.innerWidth / 60);
    girasolesData = [];

    for (let i = 0; i < total; i++) {
      const left = i * 60 + Math.random() * 30;
      const size = 100 + Math.random() * 80;
      const src = imagenes[Math.floor(Math.random() * imagenes.length)];
      girasolesData.push({ left, size, src });
    }

    localStorage.setItem("campoGirasoles", JSON.stringify(girasolesData));
  }

  let index = 0;

  function insertarUno() {
    if (index >= girasolesData.length) return;

    const { left, size, src } = girasolesData[index];
    const girasol = document.createElement("img");
    girasol.classList.add("girasol", "girasol-ajustado");
    if (size > 140) girasol.classList.add("girasol-animado");
    girasol.src = src;
    girasol.style.left = `${left}px`;
    girasol.style.height = `${size}px`;
    girasol.style.zIndex = `${Math.floor(size)}`;

    girasol.style.opacity = "0";
    girasol.style.transition = "opacity 0.6s ease";
    contenedor.appendChild(girasol);

    requestAnimationFrame(() => {
      girasol.style.opacity = "1";
      setTimeout(() => {
        index++;
        insertarUno();
      }, 300);
    });
  }

  insertarUno();
}

function generarEstrellasFijas() {
  const fondo = document.getElementById("fondo-nocturno");
  fondo.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    const estrella = document.createElement("div");
    estrella.classList.add("estrella");
    estrella.style.top = `${Math.random() * window.innerHeight}px`;
    estrella.style.left = `${Math.random() * window.innerWidth}px`;
    fondo.appendChild(estrella);
  }
}

function iniciarCieloEstrellado() {
  generarEstrellasFijas();
}
