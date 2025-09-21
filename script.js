function activarPagina() {
  const corazon = document.getElementById("corazon-v3");
  const pantallaInicial = document.getElementById("pantalla-inicial");
  const seccion2 = document.getElementById("seccion2");

  corazon.style.animation = "none";

  const capa = document.createElement("div");
  capa.classList.add("capa-expansion");
  document.body.appendChild(capa);

  document.getElementById("musica").play();

  capa.addEventListener("animationend", () => {
    document.body.style.background = "#ffb6c1";
    pantallaInicial.style.display = "none";
    seccion2.style.display = "flex";
    setTimeout(() => {
      seccion2.style.opacity = "1";
      generarPetalos();
      mostrarPoema();
      capa.remove();
    }, 100);
  });
}

function mostrarSeccion4() {
  document.getElementById("seccion2").style.display = "none";
  document.getElementById("seccion4").style.display = "flex";
  document.body.classList.add("seccion4-activa");
}

function generarPetalos() {
  const contenedor = document.getElementById("petalos-container");

  for (let i = 0; i < 25; i++) {
    const petalo = document.createElement("span");
    petalo.classList.add("petalo");

    const startX = Math.random() * window.innerWidth;
    petalo.style.left = `${startX}px`;
    petalo.style.top = `-40px`;

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

    const tono = Math.random() * 20 + 330;
    petalo.style.background = `radial-gradient(circle at 30% 30%, hsl(${tono}, 90%, 70%), hsl(${tono - 10}, 80%, 50%))`;

    const r1 = Math.floor(Math.random() * 20 + 40);
    const r2 = Math.floor(Math.random() * 20 + 50);
    const r3 = Math.floor(Math.random() * 20 + 60);
    const r4 = Math.floor(Math.random() * 20 + 50);
    petalo.style.borderRadius = `${r1}% ${r2}% ${r3}% ${r4}% / 100% 100% 0% 0%`;

    contenedor.appendChild(petalo);
  }
}

function mostrarPoema() {
  const poema = "Cada pétalo que cae susurra tu nombre, Brisell… porque incluso el viento sabe que eres mi Princesa.";
  const contenedor = document.getElementById("poema-container");
  const palabras = poema.split(" ");

  palabras.forEach((palabra, i) => {
    const span = document.createElement("span");
    span.textContent = palabra + " ";
    span.classList.add("palabra-poema");
    span.style.animationDelay = `${i * 0.4}s`;
    contenedor.appendChild(span);
  });

  const duracionTotal = palabras.length * 0.4 * 1000;

  setTimeout(() => {
    const seccion2 = document.getElementById("seccion2");
    const seccion4 = document.getElementById("seccion4");

    seccion2.style.transition = "opacity 2s ease";
    seccion2.style.opacity = "0";

    setTimeout(() => {
      seccion2.style.display = "none";
      seccion4.style.display = "flex";
      seccion4.style.opacity = "0";
      document.body.classList.add("seccion4-activa");
      setTimeout(() => {
        seccion4.style.transition = "opacity 2s ease";
        seccion4.style.opacity = "1";
      }, 100);
    }, 2000);
  }, duracionTotal + 5000);
}
