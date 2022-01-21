// ------------------------ Tela Créditos ----------------------------------

function Informacoes() {

  var dir = 100

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
  textFont(font_padrao);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(207, 7, 99);

  fill(240);
  textSize(60);
  text("Créditos", (windowWidth / 2), (windowHeight / 4) - 50);

  textFont(font_padrao)
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 0;

  imageMode(CENTER);
  image(edu_imag, (windowWidth / 4) + dir, (windowHeight / 3) + 50, 180, 180);

  fill(240);
  textSize(25);
  text("Eduardo Belchior", (windowWidth / 3) + 100 + dir, (windowHeight / 4) + 75);

  textAlign(RIGHT);
  textSize(20);
  text("Programador", (windowWidth / 3) + 125 + dir, (windowHeight / 4) + 100);

  textAlign(CENTER);
  textSize(20);
  text("Estudante do Bacharelado em Ciência e Tecnoligia da \nUniversidade Federal do Rio Grande do Norte - UFRN", (windowWidth / 2) - 16 + dir, (windowHeight / 4) + 145);

  textAlign(CENTER);
  textSize(20);
  text("Música - Unicorn Heads URL Melt (YouTube Audio Library) ", (windowWidth / 2), (windowHeight / 2) + 100);

  textAlign(CENTER);
  textSize(20);
  text("Imagens - Vários Autores (Pexels) ", (windowWidth / 2), (windowHeight / 2) + 150);

  textSize(12);
  fill(240);
  noStroke();
  text("Produzido por Eduardo Belchior. " + ano, windowWidth / 2, windowHeight - (windowHeight / 20));
  text("Versão: " + versao, windowWidth / 20, windowHeight - (windowHeight / 20));

}