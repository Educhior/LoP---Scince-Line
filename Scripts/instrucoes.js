// ------------------------ Tela Instruções ----------------------------------

function Sobre() {
  textFont(font_padrao)

  imageMode(CORNER);
  background(24, 24, 24);

  noStroke();
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color(169, 169, 169);
  fill(169, 169, 169, 500);
  rect(mouseX - 75, mouseY - 75, 150, 150, 100)

  noStroke();
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 0;
  fill(26, 26, 26, 140);
  rect(mouseX - 75, mouseY - 75, 150, 150, 100)
  

  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 0;
  imageMode(CORNER);
  image(bg_menu, 0, 0)

  

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

  textAlign(CENTER);
  textFont(font_padrao)
  noStroke;

  fill(240);
  textSize(40);
  noStroke;
  text("Sobre o Jogo", windowWidth / 2, windowHeight / 4);

  fill(240);
  textSize(20);
  noStroke;
  text("O Science-Line é um jogo com objetivo educacional, que possui uma maneira simples de\n exercitar seus conhecimentos sobre as classificações dos animais, por meio de raciocino logico e \n reconhecimento de suas características.", windowWidth / 2, (windowHeight / 4) + 80);

  fill(240);
  textSize(40);
  noStroke;
  text("Regras do Jogo", windowWidth / 2, (windowHeight / 2) + 80);

  fill(240);
  textSize(20);
  noStroke;
  text("No jogo você deve relacionar as imagens dos animais com sua respectiva classificação.\n Contara com 3 vidas, e ao conectar um animal com uma característica errada perde uma vida, \n reiniciando o jogo caso perca as três que possui inicialmente. ", windowWidth / 2, (windowHeight / 2) + 160);

  textSize(12);
  fill(240);
  noStroke();
  text("Produzido por Eduardo Belchior. " + ano, windowWidth / 2, windowHeight - (windowHeight / 20));
  text("Versão: " + versao, windowWidth / 20, windowHeight - (windowHeight / 20));

}