function showTime() {
  document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(showTime, 1000);

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  const container = document.querySelector('.hearts-container');

  // posizione casuale orizzontale dentro viewport
  heart.style.left = Math.random() * window.innerWidth + 'px';

  // durata animazione casuale tra 4 e 8 secondi
  const duration = 4 + Math.random() * 4;
  heart.style.animationDuration = duration + 's';

  // animazione oscillatoria a destra/sinistra customized tramite animazione inline
  // per variare l'oscillazione X, alterniamo direzione con sin
  // Useremo inline style per trasform contemporanea di X e Y con keyframe floatup

  // aggiungiamo l'elemento
  container.appendChild(heart);

  // rimuoviamo il cuore dopo che finisce animazione per evitare troppe animazioni
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// ogni 300ms crea un nuovo cuore
setInterval(createHeart, 300);
