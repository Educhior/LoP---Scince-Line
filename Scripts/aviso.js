
function Aviso() {

  background(0);


  textAlign(CENTER);
  textFont(font_padrao)

  fill(240);
  textSize(60);
  text("Aviso", windowWidth / 2, windowHeight / 4);

  fill(240);
  textSize(25);
  text("Este jogo apresenta músicas na sua execução", windowWidth / 2, (windowHeight / 4) + 75);

  if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight + 500) / 2) - 35 && mouseY < (((windowHeight + 500) / 2) - 35) + 50) {
    fill(20);
    stroke(200);
    rect((windowWidth / 2) - 75, ((windowHeight + 500) / 2) - 35, 150, 50, 5);
  } else {
    fill(0);
    noStroke;
    rect((windowWidth / 2) - 75, ((windowHeight + 500) / 2) - 35, 150, 50, 5)
  }

  textSize(26);
  fill(240);
  noStroke();
  text("Aceito", windowWidth / 2, (windowHeight + 500) / 2);

  textSize(12);
  fill(240);
  noStroke();
  text("Produzido por Eduardo Belchior. " + ano, windowWidth / 2, windowHeight - (windowHeight / 20));

}