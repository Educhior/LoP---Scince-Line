// ------------------------ Tela Jogo ----------------------------------

function Jogo() {
  audio.autoplay(false);
  audio.stop();

  var vida = 3
  var Fases = [cachorro, gato, cobra]

  background(26, 26, 26, 255);

  // ------------------------ Bt Voltar ----------------------------------

  if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
    noFill();
    stroke('rgba(218, 245, 8, 1)');
    rect(windowWidth / 15, windowHeight / 15, 50, 50, 10);

    image(back_yellow, windowWidth / 15, windowHeight / 15, 50, 50);

    fill(240);
    noStroke();

  } else {
    noFill();
    noStroke;
    rect(windowWidth / 15, windowHeight / 15, 50, 50);

    image(back_white, windowWidth / 15, windowHeight / 15, 50, 50);
  }

  
  
  




}