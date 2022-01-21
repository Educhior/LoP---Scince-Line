// ------------------------ Variaveis ----------------------------------
var tela = 0;
var largura = 150;
var altura = 40;

var som = 1;
var versao = 0.10;
var ano = 2022;

var itensCarregado = 0;
var carregou = false;
var items = 19;


function carregando() {
  itensCarregado++
  console.log("carregou..." + itensCarregado);
  if (itensCarregado === items) {
    carregou = true;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {

  back_yellow = loadImage('assets/imagens/Reply.png', carregando);
  back_white = loadImage('assets/imagens/Reply2.png', carregando);
  volume_off = loadImage('assets/imagens/Volume-off.png', carregando);
  volume_up = loadImage('assets/imagens/Volume-up.png', carregando);
  sem_imagem = loadImage('assets/imagens/no-photo.png', carregando);
  bg_menu = loadImage('assets/imagens/bg_menu.png', carregando);
  edu_imag = loadImage ('assets/imagens/edu.png', carregando);

  cachorro = loadImage ('assets/imagens/img_fases/cachorro.jpg', carregando);
  borboleta = loadImage ('assets/imagens/img_fases/borboleta.jpg', carregando);
  cavalo = loadImage ('assets/imagens/img_fases/cavalo.jpg', carregando);
  coruja = loadImage ('assets/imagens/img_fases/coruja.jpg', carregando);
  gato = loadImage ('assets/imagens/img_fases/gato.jpg', carregando);
  piguim = loadImage ('assets/imagens/img_fases/piguim.jpg', carregando);
  tigre = loadImage ('assets/imagens/img_fases/tigre.jpg', carregando);

  audio = createAudio('assets/audio/UnicornHeads.mp3', carregando);

  font_padrao = loadFont('assets/Fonts/Nunito-Regular.ttf', carregando);
  font_ia = loadFont('assets/Fonts/ENDOS.TTF', carregando)
  font_carta = loadFont('assets/Fonts/Licorice-Regular.ttf', carregando);
  fonte_robo = loadFont('assets/Fonts/QwitcherGrypen-Regular.ttf', carregando);

  createCanvas(windowWidth, windowHeight);

}

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
      Configuracoes();
    } else if (tela == 4) {
      Informacoes();
    } else if (tela == 5) {
      Sobre();
    } else {
      desenvolvimento();
    }
  } else {
    background(0);

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

    drawingContext.shadowBlur = 0;
    drawingContext.shadowColor = 0;
    textAlign(RIGHT);
    textFont(font_padrao);
    fill(255);
    textSize(20);
    text("Carregando . . .", (windowWidth / 2) - 150, (windowHeight / 2) - 15);
  }

}


// ------------------------ Tela Menu ----------------------------------

function Menu1() {
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



  // ------------------------ Música do Jogo ----------------------------------

  audio.autoplay(true);
  if (som == 0) {
    audio.stop;
  } else {
    audio.play();
  }


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

  /*
  // ------------------------ Bt Configurações ----------------------------------

  if (mouseX > (windowWidth / 2) - 75 && mouseX < ((windowWidth / 2) - 75) + 150 && mouseY > ((windowHeight / 2) + 180) - 35 && mouseY < (((windowHeight / 2) + 180) - 35) + 50){
    fill(26,26,26,255);
    stroke('rgba(218, 245, 8, 1)');
    rect((windowWidth / 2) - 75, ((windowHeight / 2) + 180) - 35 , 150, 50, 5)

    textSize(20);
    fill('rgba(218, 245, 8, 1)');
    noStroke();
    text("Configurações", (windowWidth / 2), (windowHeight / 2) + 177);

  }else{
    fill(26,26,26,255);
    noStroke;
    rect((windowWidth / 2) - 75, ((windowHeight / 2) + 180) - 35 , 150, 50, 5)

    textSize(20);
    fill(240);
    noStroke();
    text("Configurações", (windowWidth / 2), (windowHeight / 2) + 177);
  }
  */

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
      tela = -2;
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

  if (tela == 2) {
    // ------------------------ Bt Voltar ----------------------------------
    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      tela = 1;
    }
  }

  if (tela == 3) {
    // ------------------------ Bt Voltar ----------------------------------
    if (mouseX > windowWidth / 15 && mouseX < (windowWidth / 15) + 50 && mouseY > windowHeight / 15 && mouseY < (windowHeight / 15) + 50) {
      audio_click.play();
      setTimeout(tela1, delay);
    }

    if (mouseX > windowWidth / 2 && mouseX < (windowWidth / 2) + 50 && mouseY > windowHeight / 2 && mouseY < (windowHeight / 2) + 50) {
      if (som == 0) {
        audio.stop;
        som == 1;
        alert("Som desligado");
      } else {
        audio.play();
        som == 0;
        alert("Som ligado");
      }
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