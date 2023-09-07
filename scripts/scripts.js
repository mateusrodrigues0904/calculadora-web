let calc = 0;
let arrayCalc = [];
let condOp = "";
let calc2 = "";
let txtcalc = document.getElementById("txtCalc");
let preRes = document.getElementById("preRes");
let resultado = document.getElementById("ph19");
let adicao = document.getElementById("adicao");
let subtracao = document.getElementById("subtracao");
let multiplicacao = document.getElementById("multiplicacao");
let divisao = document.getElementById("divisao");

let index;
let numNeg;
let porCem;

function AC() {
  preRes.innerText = "";
  txtcalc.style.fontSize = "50px";
  txtcalc.style.marginBottom = "0px";
  txtcalc.innerHTML = 0;
  calc = 0;
  arrayCalc = [];
  arrayCalc.length = 0;
}

function porcem() {
  porCem = calc / 100;
  calc = porCem;
  let porCemf = String(porCem);
  if (porCemf.length > 9) {
    txtcalc.style.fontSize = "23px";
    txtcalc.style.marginBottom = "30px";
    txtcalc.innerText = porCem;
  } else {
    txtcalc.style.fontSize = "50px";
    txtcalc.style.marginBottom = "0px";
    txtcalc.innerText = porCem;
  }
}

function negpos() {
  numNeg = calc * -1;
  txtcalc.innerHTML = numNeg;
  calc = numNeg;
}

function virgula() {
  if (txtcalc.innerText.indexOf(".") === -1) {
    txtcalc.innerText += ".";
    calc = txtcalc.innerText;
  }
}

function pegaNumero(n) {
  if (txtcalc.innerText == "0") {
    txtcalc.innerText = n;
  } else if (txtcalc.innerText.length >= 9) {
  } else if (txtcalc.innerText == "0.") {
    txtcalc.innerText += n;
  } else {
    txtcalc.innerText += n;
  }
  calc = Number(txtcalc.innerText);
}
function operacoes(n, n1) {
  txtcalc.style.fontSize = "50px";
  condOp = n;
  txtcalc.innerText = 0;
  arrayCalc.push(calc);
  preRes.innerText = arrayCalc[0] + n1;
  calc = null;
  index = arrayCalc.indexOf(null);
  if (index > -1) {
    arrayCalc.splice(index, 1);
  }
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

adicao.addEventListener("click", () => {
  operacoes("adicao", " + ");
});
subtracao.addEventListener("click", () => {
  operacoes("subtracao", " - ");
});
multiplicacao.addEventListener("click", () => {
  operacoes("multiplicacao", " x ");
});
divisao.addEventListener("click", () => {
  operacoes("divisao", " ÷ ");
});

resultado.addEventListener("click", () => {
  if (condOp === "adicao") {
    arrayCalc.push(calc);
    if (calc == null) {
      calc = 0;
    }
    preRes.innerText += " " + calc + " =";
    calc = null;
    index = arrayCalc.indexOf(null);
    if (index > -1) {
      arrayCalc.splice(index, 1);
    }
    let soma = 0;
    for (let i = 0; i < arrayCalc.length; i++) {
      soma += arrayCalc[i];
    }
    arrayCalc = [];
    arrayCalc.push(soma);
    txtcalc.innerText = soma;
    let somaf = String(soma);
    if (somaf.length > 9) {
      txtcalc.style.fontSize = "23px";
      txtcalc.style.marginBottom = "30px";
      txtcalc.innerText = soma;
    } else {
      txtcalc.innerText = soma;
    }
  } else if (condOp === "subtracao") {
    arrayCalc.push(calc);
    if (calc == null) {
      calc = 0;
    }
    preRes.innerText += " " + calc + " =";
    calc = null;
    index = arrayCalc.indexOf(null);
    if (index > -1) {
      arrayCalc.splice(index, 1);
    }
    let sub = arrayCalc[0];
    for (let i = 1; i < arrayCalc.length; i++) {
      sub -= arrayCalc[i];
    }
    arrayCalc = [];
    arrayCalc.push(sub);
    let subf = String(sub);
    if (subf.length > 9) {
      txtcalc.style.fontSize = "23px";
      txtcalc.style.marginBottom = "30px";
      txtcalc.innerText = sub;
    } else {
      txtcalc.innerText = sub;
    }
  } else if (condOp === "multiplicacao") {
    arrayCalc.push(calc);
    if (calc == null) {
      calc = 0;
    }
    preRes.innerText += " " + calc + " =";
    calc = null;
    index = arrayCalc.indexOf(null);
    if (index > -1) {
      arrayCalc.splice(index, 1);
    }
    let mult = 1;
    for (let i = 0; i < arrayCalc.length; i++) {
      mult *= arrayCalc[i];
    }
    arrayCalc = [];
    arrayCalc.push(mult);
    let multf = String(mult);
    if (multf.length > 9) {
      txtcalc.style.fontSize = "23px";
      txtcalc.style.marginBottom = "30px";
      txtcalc.innerText = mult;
    } else {
      txtcalc.innerText = mult;
    }
  } else if (condOp === "divisao") {
    arrayCalc.push(calc);
    if (calc == null) {
      calc = 0;
    }
    preRes.innerText += " " + calc + " =";
    calc = null;
    index = arrayCalc.indexOf(null);
    if (index > -1) {
      arrayCalc.splice(index, 1);
    }
    let div = arrayCalc[0];
    for (let i = 1; i < arrayCalc.length; i++) {
      if (arrayCalc[i] !== 0) {
        div /= arrayCalc[i];
      } else {
        continue;
      }
    }
    arrayCalc = [];
    arrayCalc.push(div);
    let divf = String(div);
    if (divf.length > 9) {
      txtcalc.style.fontSize = "23px";
      txtcalc.style.marginBottom = "30px";
      txtcalc.innerText = div;
    } else {
      txtcalc.innerText = div;
    }
  }
});
