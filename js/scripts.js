let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};
//-------------------------------------------------
const gerarImagem = () => {
  let qtdimagem = document.getElementById("inQtdImg").value; //valor informado pelo usuario

  console.log(qtdimagem);

  let canvas = document.getElementById("canvas");

  canvas.innerHTML = "";

  for (let i = 1; i <= qtdimagem; i++) {
    canvas.innerHTML += `<img class="imagens" src="img/acesa.jpg" alt="">`;
  }
};
//-----------------------------------------------

const calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido").value;
  let inPercDesc = document.getElementById("inPercDesc");
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");
  switch (true) {
    case inValorPedido >= 2000:
      inPercDesc.value = 1.5;
      break;
    case inValorPedido >= 1500:
      inPercDesc.value = 1.0;
      break;
    case inValorPedido >= 1000:
      inPercDesc.value = 0.8;
      break;
    case inValorPedido >= 500:
      inPercDesc.value = 0.5;
      break;
    default:
      break;
  }
  inValDesc.value = inValorPedido * (inPercDesc.value / 100);
  inValFinal.value = inValorPedido - inValDesc.value;
};

//------------------------------------------------
const validaForm = () => {
  // captura dos dados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  // validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 &&
    (msgErro.innerHTML += "Nome do cliente com tamanho inválido! <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválida <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválida <br>");
  inMail.length < 6 && (msgErro.innerHTML += "E-mail inválida <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválida <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Produto inválida <br>");
  inQtd == "" && (msgErro.innerHTML += "Qtde inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Qtde negativa! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválida <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo! <br>");

  // mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : ((msgErro.style.display = "block"), msgErro.classList.remove("verde"));

  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};
