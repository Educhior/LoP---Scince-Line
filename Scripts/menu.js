// ------------------------ Variaveis ----------------------------------
var tela = 0;
var largura = 150;
var altura = 40;

var versao = 0.2;
var ano = 2022;

var itensCarregado = 0;
var carregou = false;
var items = 20;

var fase = 0;
var vida = 3;

// ----------------------- Verificado de Carregamento ---------------------
function carregando() {
  itensCarregado++
  console.log("carregou..." + itensCarregado);
  if (itensCarregado === items) {
    carregou = true;
  }
}

// ----------------------- Escala da Tela ---------------------
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// ----------------------- Setup  ---------------------
function setup() {

  back_yellow = loadImage('assets/imagens/Reply.png', carregando);
  back_white = loadImage('assets/imagens/Reply2.png', carregando);
  volume_off = loadImage('assets/imagens/Volume-off.png', carregando);
  volume_up = loadImage('assets/imagens/Volume-up.png', carregando);
  sem_imagem = loadImage('assets/imagens/no-photo.png', carregando);
  bg_menu = loadImage('assets/imagens/bg_menu.png', carregando);
  edu_imag = loadImage('assets/imagens/edu.png', carregando);
  coracao = loadImage('assets/imagens/heart-png.png', carregando)

  cachorro = loadImage('assets/imagens/img_fases/cachorro.jpg', carregando);
  borboleta = loadImage('assets/imagens/img_fases/borboleta.jpg', carregando);
  cavalo = loadImage('assets/imagens/img_fases/cavalo.jpg', carregando);
  coruja = loadImage('assets/imagens/img_fases/coruja.jpg', carregando);
  gato = loadImage('assets/imagens/img_fases/gato.jpg', carregando);
  pinguim = loadImage('assets/imagens/img_fases/piguim.jpg', carregando);
  tigre = loadImage('assets/imagens/img_fases/tigre.jpg', carregando);

  audio = createAudio('assets/audio/UnicornHeads.mp3', carregando);

  font_padrao = loadFont('assets/Fonts/Nunito-Regular.ttf', carregando);
  font_ia = loadFont('assets/Fonts/ENDOS.TTF', carregando)
  font_carta = loadFont('assets/Fonts/Licorice-Regular.ttf', carregando);
  fonte_robo = loadFont('assets/Fonts/QwitcherGrypen-Regular.ttf', carregando);

  createCanvas(windowWidth, windowHeight);

}

// ----------------------- Updadte ---------------------

function draw() {
  if (carregou === true) {
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 0;

    background(0);
    textStyle(NORMAL);

    if (tela == 0) {
      Aviso();
    } else if (tela == 1) {
      Menu1();
    } else if (tela == 2) {
      Jogo();
    } else if (tela == 3) {
      Errou();
    } else if (tela == 31) {
      Acertou();
    } else if (tela == 4) {
      Informacoes();
    } else if (tela == 5) {
      Sobre();
    } else if (tela == 100) {
      Fim();
    } else if (tela == 101) {
      Fim2();
    }else {
      desenvolvimento();
    }
  } else {
    background(0);

    // ----------------------- Barra de carregamento ---------------------

    noStroke();
    fill(105, 105, 105);
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 0;
    rect((windowWidth / 2) - 300, windowHeight / 2, 600, 5, 50);

    fill(127, 188, 65);
    noStroke();
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(127, 188, 65, 255);
    rect((windowWidth / 2) - 300, windowHeight / 2, itensCarregado * (600 / items), 5, 50);

    // ----------------------- Texto de carregamento ---------------------
    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 0;
    textAlign(RIGHT);
    textFont(font_padrao);
    fill(255);
    textSize(20);
    text("Carregando . . .    " + (itensCarregado * (100 / items)).toFixed(1) + "%", (windowWidth / 2) - 100, (windowHeight / 2) - 15);
  }

}


// ------------------------ Tela Menu ----------------------------------

function Menu1() {
  imageMode(CORNER);
  background(24, 24, 24);

  // ----------------------- Fundo Interativo ---------------------

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



  // ------------------------ Música do Jogo ----------------------------------

  audio.autoplay(true);
  audio.play();

  // ----------------------- Titulo ---------------------

  textAlign(CENTER);
  drawingContext.shadowBlur = 32;
  drawingContext.shadowColor = color(207, 7, 99);
  fill(240);
  textSize(60);
  textFont(font_ia)
  text("Science-line", windowWidth / 2, windowHeight / 4);

  textFont(font_padrao)
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 0;

  // ------------------------ Bt Jogar ----------------------------------

  if (mouseX > (windowWidth / 2) - (largura / 2) && mouseX < ((windowWidth / 2) - (largura / 2)) + 150 && mouseY > (windowHeight / 2) - 35 && mouseY < ((windowHeight / 2) - 35) + 50) {

    noFill();
    stroke('rgb(123,168,74)');
    rect((windowWidth / 2) - (largura / 2), (windowHeight / 2) - 35, 150, 50, 5);

    textSize(20);
    fill(127, 188, 65);
    noStroke();
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(127, 188, 65, 255);
    text("Jogar", windowWidth / 2, (windowHeight / 2) - 3);

  } else {
    noFill();
    noStroke;
    rect((windowWidth / 2) - (largura / 2), (windowHeight / 2) - 35, 150, 50, 5)

    textSize(20);
    fill(240);
    noStroke();
    text("Jogar", windowWidth / 2, (windowHeight / 2) - 3);
  }

  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 0;


  // ------------------------ Bt Instruções ----------------------------------

  if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight / 2) + 60) - 35 && mouseY < (((windowHeight / 2) + 60) - 35) + 50) {
    noFill();
    stroke('rgb(95,130,181)');
    rect((windowWidth / 2) - 75, ((windowHeight / 2) + 60) - 35, 150, 50, 5)

    textSize(20);
    fill(95, 130, 181);
    noStroke();
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(95, 130, 181);
    text("Instruções", windowWidth / 2, (windowHeight / 2) + 57);

  } else {
    noFill();
    noStroke;
    rect((windowWidth / 2) - 75, ((windowHeight / 2) + 60) - 35, 150, 50, 5)

    textSize(20);
    fill(240);
    noStroke();
    text("Instruções", windowWidth / 2, (windowHeight / 2) + 57);
  }

  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 0;

  // ------------------------ Bt Créditos ----------------------------------

  if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight / 2) + 120) - 35 && mouseY < (((windowHeight / 2) + 120) - 35) + 50) {
    noFill();
    stroke('rgb(159,56,58)');
    rect((windowWidth / 2) - 75, ((windowHeight / 2) + 120) - 35, 150, 50, 5)

    textSize(20);
    fill(159, 56, 58);
    noStroke();
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(159, 56, 58);
    text("Créditos", (windowWidth / 2), (windowHeight / 2) + 117);

  } else {
    noFill();
    noStroke;
    rect((windowWidth / 2) - 75, ((windowHeight / 2) + 120) - 35, 150, 50, 5)

    textSize(20);
    fill(240);
    noStroke();
    text("Créditos", (windowWidth / 2), (windowHeight / 2) + 117);
  }


  textSize(12);
  fill(240);
  noStroke();
  text("Produzido por Eduardo Belchior. " + ano, windowWidth / 2, windowHeight - (windowHeight / 20));

  textSize(12);
  fill(240);
  noStroke();
  text("Versão: " + versao, windowWidth / 20, windowHeight - (windowHeight / 20));

}

// ------------------------ Click do Mouse ----------------------------------

function mouseClicked() {

  if (tela == 0) {
    // ------------------------ Bt Aceitar ----------------------------------
    if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight + 500) / 2) - 35 && mouseY < (((windowHeight + 500) / 2) - 35) + 50) {
      tela = 1;
    }
  }

  if (tela == 1) {
    // ------------------------ Bt Jogar ----------------------------------
    if (mouseX > (windowWidth / 2) - (largura / 2) && mouseX < ((windowWidth / 2) - (largura / 2)) + 150 && mouseY > (windowHeight / 2) - 35 && mouseY < ((windowHeight / 2) - 35) + 50) {
      tela = 2;
    }
    // ------------------------ Bt Instruções ----------------------------------
    if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight / 2) + 60) - 35 && mouseY < (((windowHeight / 2) + 60) - 35) + 50) {
      tela = 5;
    }
    // ------------------------ Bt Créditos ----------------------------------
    if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight / 2) + 120) - 35 && mouseY < (((windowHeight / 2) + 120) - 35) + 50) {
      tela = 4;
    }
    // ------------------------ Bt Configurações ----------------------------------
    if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight / 2) + 180) - 35 && mouseY < (((windowHeight / 2) + 180) - 35) + 50) {
      tela = -1;
    }
  }

  //------------------------------ Tela Jogo ------------

  if (tela == 2) {
    // ------------------------ Bt Voltar ----------------------------------
    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      fase = 0;
      vida = 3;
      tela = 1;
    }

    if (fase == 0) {
      if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight + 500) / 2) - 35 && mouseY < (((windowHeight + 500) / 2) - 35) + 50) {
        fase = 1;
      }
    }

    // ------------------------------ Fases --------------------------

    if (fase == 1) {
      // --------------------- Restosta 1 (COR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        tela = 31;
      }

      // --------------------- Restosta 2 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 3 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 4 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }
    } else if (fase == 2) {
      // --------------------- Restosta 1 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 2 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 3 (COR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        tela = 31;
      }

      // --------------------- Restosta 4 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }

    } else if (fase == 3) {
      // --------------------- Restosta 1 (COR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        tela = 31;
      }

      // --------------------- Restosta 2 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 3 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 4 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }
    } else if (fase == 4) {
      // --------------------- Restosta 1 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 2 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 3 (COR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        tela = 31;
      }

      // --------------------- Restosta 4 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }
    } else if (fase == 5) {
      // --------------------- Restosta 1 (COR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        tela = 31;
      }

      // --------------------- Restosta 2 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 3 (COR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 4 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }
    } else if (fase == 6) {
      // --------------------- Restosta 1 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 2 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) - 150 - 90 && mouseX < ((windowWidth / 2) - 150) - 90 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }

      // --------------------- Restosta 3 (COR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < ((windowWidth / 2) + 150) - 120 + 200 && mouseY > (windowHeight / 2) + 50 && mouseY < ((windowHeight / 2) + 50) + 60) {
        tela = 100;
      }

      // --------------------- Restosta 4 (ERR) ------------------------

      if (mouseX > (windowWidth / 2) + 150 - 120 && mouseX < (windowWidth / 2) + 150 - 120 + 200 && mouseY > (windowHeight / 2) + 150 && mouseY < ((windowHeight / 2) + 150 + 60)) {
        vida = vida - 1;
        tela = 3;
      }
    }

  }

  if (tela == 3) {

    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      fase = 0;
      vida = 3;
      tela = 1;
    }

    if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight + 500) / 2) - 35 && mouseY < (((windowHeight + 500) / 2) - 35) + 50) {
      if (vida > 0) {
        fase = fase + 1;
        if (fase == 7){
          tela = 100;
        }else{
          tela = 2;
        }
      } else {
        tela = 101;
      }
    }
  }

  if (tela == 31) {

    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      fase = 0;
      vida = 3;
      tela = 1;
    }

    if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight + 500) / 2) - 35 && mouseY < (((windowHeight + 500) / 2) - 35) + 50) {
      if (vida > 0) {
        fase = fase + 1;
        tela = 2;
      } else {
        tela = 101;
      }
    }
  }

  if (tela == 100) {

    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      fase = 0;
      vida = 3;
      tela = 1;
    }
  }

  if (tela == 101) {

    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      fase = 0;
      vida = 3;
      tela = 1;
    }
  }

  if (tela == 4) {
    // ------------------------ Bt Voltar ----------------------------------
    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      tela = 1;
    }

  }

  if (tela == 5) {
    // ------------------------ Bt Voltar ----------------------------------
    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      tela = 1;
    }
  }

  if (tela == 10) {
    // ------------------------ Bt Voltar ----------------------------------
    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      tela = 1;
    }
  }

  if (tela < 0) {
    // ------------------------ Bt Voltar ----------------------------------
    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      tela = 1;
    }
  }

}