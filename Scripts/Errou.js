function Errou() {

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

  fill(240);
  textSize(60);
  text("(■_■)\nEita! Essa alternativa não é a correta", windowWidth / 2, windowHeight / 2);


  if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight + 500) / 2) - 35 && mouseY < (((windowHeight + 500) / 2) - 35) + 50) {
    noFill();
    stroke(200);
    rect((windowWidth / 2) - 75, ((windowHeight + 500) / 2) - 35, 150, 50, 5);
  } else {
    noFill();
    noStroke;
    rect((windowWidth / 2) - 75, ((windowHeight + 500) / 2) - 35, 150, 50, 5)
  }

  textSize(26);
  fill(240);
  noStroke();
  text("Continuar", windowWidth / 2, (windowHeight + 500) / 2);


}