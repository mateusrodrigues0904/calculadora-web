let txtcalc = document.getElementById("txtCalc");
let calc = 0;
let arrayCalc = [];
let resultado = document.getElementById("ph19");
let adicao = document.getElementById("adicao");
let subtracao = document.getElementById("subtracao");
let multiplicacao = document.getElementById("multiplicacao");

function AC() {
  txtcalc.innerHTML = 0;
  calc = 0;
  arrayCalc = [];
  arrayCalc.length = 0;
}

function pegaNumero(n) {
  if (txtcalc.innerText == 0) {
    txtcalc.innerText = n;
  } else if (txtcalc.innerText.length >= 9) {
  } else {
    txtcalc.innerText += n;
  }
  calc = Number(txtcalc.innerText);
}

function zero() {
  pegaNumero(0);
}
function um() {
  pegaNumero(1);
}
function dois() {
  pegaNumero(2);
}
function tres() {
  pegaNumero(3);
}
function quatro() {
  pegaNumero(4);
}
function cinco() {
  pegaNumero(5);
}
function seis() {
  pegaNumero(6);
}
function sete() {
  pegaNumero(7);
}
function oito() {
  pegaNumero(8);
}
function nove() {
  pegaNumero(9);
}

function virgula() {
  if (txtcalc.innerText.indexOf(".") === -1) {
    txtcalc.innerText += ".";
    calc = txtcalc.innerText;
  }
}

let condOp = "";

adicao.addEventListener("click", () => {
  condOp = "adicao";
  txtcalc.innerText = "";
  arrayCalc.push(calc);
  let soma = 0;
  for (let i = 0; i < arrayCalc.length; i++) {
    soma += arrayCalc[i];
  }
});

subtracao.addEventListener("click", () => {
  condOp = "subtracao";
  txtcalc.innerText = "";
  arrayCalc.push(calc);
  let sub = 0;
  for (let i2 = 0; i2 < arrayCalc.length; i2++) {
    arrayCalc[i2] -= sub;
  }
});

multiplicacao.addEventListener("click", () => {
  condOp = "multiplicacao";
  txtcalc.innerText = "";
  arrayCalc.push(calc);
  let mult = 1;
  for (let i3 = 0; i3 < arrayCalc.length; i3++) {
    mult *= arrayCalc[i3];
  }
});

resultado.addEventListener("click", () => {
  if (condOp === "adicao") {
    arrayCalc.push(calc);
    let soma = 0;
    for (let i = 0; i < arrayCalc.length; i++) {
      soma += arrayCalc[i];
    }
    txtcalc.innerText = soma;
  } else if (condOp === "subtracao") {
    arrayCalc.push(calc);
    let sub = arrayCalc[0]; // Comece com o primeiro valor no array
    for (let i = 1; i < arrayCalc.length; i++) {
      sub -= arrayCalc[i];
    }
    txtcalc.innerText = sub;
  } else if (condOp === "multiplicacao") {
    arrayCalc.push(calc);
    let mult = 1;
    for (let i3 = 0; i3 < arrayCalc.length; i3++) {
      mult *= arrayCalc[i3];
    }
    txtcalc.innerHTML = mult;
  }
});