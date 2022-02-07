// ------------------------ Tela Jogo ----------------------------------

function Jogo() {
  audio.autoplay(false);
  audio.stop();


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

  fill(255);
  noStroke();
  textSize(25);
  noStroke;
  text("Vidas:", windowWidth / 15, (windowHeight / 15) + 100);
  if(vida == 3){
    image(coracao, (windowWidth / 15) + 35, (windowHeight / 15) + 65, 50, 50);
    image(coracao, (windowWidth / 15) + 85 , (windowHeight / 15) + 65, 50, 50);
    image(coracao, (windowWidth / 15) + 135, (windowHeight / 15) + 65, 50, 50);
  }else if(vida == 2){
    image(coracao, (windowWidth / 15) + 35, (windowHeight / 15) + 65, 50, 50);
    image(coracao, (windowWidth / 15) + 85 , (windowHeight / 15) + 65, 50, 50);
  }else if (vida == 1){
    image(coracao, (windowWidth / 15) + 35, (windowHeight / 15) + 65, 50, 50);
  }

  //background(26, 26, 26, 255);

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

  if (fase == 0) {

    textAlign(CENTER);
    textFont(font_padrao)
    noStroke;

    fill(240);
    textSize(40);
    noStroke;
    text("Regras do Jogo", windowWidth / 2, (windowHeight / 4));

    fill(240);
    textSize(20);
    noStroke;
    text("No jogo você deve relacionar as imagens dos animais com sua respectiva classificação.\n Contara com 3 vidas, e ao conectar um animal com uma característica errada perde uma vida, \n reiniciando o jogo caso perca as três que possui inicialmente. ", windowWidth / 2, (windowHeight / 2));



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
    text("Começar", windowWidth / 2, (windowHeight + 500) / 2);

  } else if (fase == 1) {

    image(cachorro, (windowWidth / 2) - 175, windowHeight / 14, 350, 250);

    textAlign(CENTER);
    textFont(font_padrao)

    fill(240);
    textSize(30);
    text("Qual dessas características pertecem aos cachorros\nda imagem?", windowWidth / 2, (windowHeight / 2) - 25);

    // --------------------- Restosta 1 (COR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Pelos", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Pelos", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 2 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Bicos", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Bicos", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

    }

    // --------------------- Restosta 3 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Penas", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Penas", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 4 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Escamas", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Escamas", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

    }


  } else if (fase == 2) {

    image(borboleta, (windowWidth / 2) - 175, windowHeight / 14, 350, 250);

    textAlign(CENTER);
    textFont(font_padrao)

    fill(240);
    textSize(30);
    text("Qual dessas características pertecem a borboleta\nda imagem?", windowWidth / 2, (windowHeight / 2) - 25);

    // --------------------- Restosta 1 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Garras", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Garras", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 2 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Bico", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Bico", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

    }

    // --------------------- Restosta 3 (COR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Assas", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Assas", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 4 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Carnívora", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Carnívora", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

    }


  } else if (fase == 3) {

    image(pinguim, (windowWidth / 2) - 175, windowHeight / 14, 350, 250);

    textAlign(CENTER);
    textFont(font_padrao)

    fill(240);
    textSize(30);
    text("Qual dessas características pertecem ao piguim\nda imagem?", windowWidth / 2, (windowHeight / 2) - 25);

    // --------------------- Restosta 1 (COR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Ovíparos", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Ovíparos", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 2 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Dentes", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Dentes", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

    }

    // --------------------- Restosta 3 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Pés", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Pés", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 4 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Voar", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Voar", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

    }
  } else if (fase == 4) {

    image(tigre, (windowWidth / 2) - 175, windowHeight / 14, 350, 250);

    textAlign(CENTER);
    textFont(font_padrao)

    fill(240);
    textSize(30);
    text("Qual dessas características pertecem ao tigre\nda imagem?", windowWidth / 2, (windowHeight / 2) - 25);

    // --------------------- Restosta 1 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Antenas", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Antenas", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 2 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Anfíbio", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Anfíbio", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

    }

    // --------------------- Restosta 3 (COR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Garras", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Garras", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 4 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Invertebrado", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Invertebrado", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

    }
  } else if (fase == 5) {

    image(coruja, (windowWidth / 2) - 175, windowHeight / 14, 350, 250);

    textAlign(CENTER);
    textFont(font_padrao)

    fill(240);
    textSize(30);
    text("Qual dessas características pertecem a coruja\nda imagem?", windowWidth / 2, (windowHeight / 2) - 25);

    // --------------------- Restosta 1 (COR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Penas", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Penas", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 2 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Herbívora", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Herbívora", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

    }

    // --------------------- Restosta 3 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Réptil", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Réptil", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 4 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Invertebrado", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Invertebrado", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

    }
  } else if (fase == 6) {

    image(gato, (windowWidth / 2) - 175, windowHeight / 14, 350, 250);

    textAlign(CENTER);
    textFont(font_padrao)

    fill(240);
    textSize(30);
    text("Qual dessas características pertecem ao gato\nda imagem?", windowWidth / 2, (windowHeight / 2) - 25);

    // --------------------- Restosta 1 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Ovíparo", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Ovíparo", (windowWidth / 2) - 140, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 2 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Herbívoro", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) - 150) - 90, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Herbívoro", (windowWidth / 2) - 140, (windowHeight / 2) + 190);

    }

    // --------------------- Restosta 3 (COR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Mamífero", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 50, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Mamífero", (windowWidth / 2) + 130, (windowHeight / 2) + 90);

    }

    // --------------------- Restosta 4 (ERR) ------------------------

    if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
      noFill();
      stroke('rgba(218, 245, 8, 1)');
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Réptil", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

      fill(240);
      noStroke();

    } else {
      noFill();
      noStroke;
      rect(((windowWidth / 2) + 150) - 120, (windowHeight / 2) + 150, 200, 60, 5);

      fill(240);
      textSize(25);
      text("Réptil", (windowWidth / 2) + 130, (windowHeight / 2) + 190);

    }
  }




}