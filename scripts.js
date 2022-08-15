let prato = "";
let bebida = "";
let sobremesa = "";

let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;


function selecionarPrato(pratoSelecionado, preco) {
  prato = pratoSelecionado;
  precoPrato = Number(preco);

  const botaoSelecionado = document.querySelector(".prato .item-selected");

  if (botaoSelecionado !== null) {
    const checkParaRemover = document.querySelector('.prato .show');

    botaoSelecionado.classList.remove("item-selected");
    botaoSelecionado.classList.add("no-border");
    checkParaRemover.classList.remove('show');
  }

  // seleciona item
  const checkParaMostrar = document.querySelector(`.${pratoSelecionado} .check`);

  const botao = document.querySelector(`.${pratoSelecionado}`);
  botao.classList.remove("no-border");
  botao.classList.add("item-selected");

  checkParaMostrar.classList.add("show");

  habilitarBotao();
}

function selecionarBebida(bebidaSelecionada, preco) {
  bebida = bebidaSelecionada;
  precoBebida = Number(preco)
  const botaoSelecionado = document.querySelector(".bebida .item-selected");

  if (botaoSelecionado !== null) {
    const checkParaRemover = document.querySelector('.bebida .show');

    botaoSelecionado.classList.remove("item-selected");
    botaoSelecionado.classList.add("no-border");
    checkParaRemover.classList.remove('show');
  }

  // seleciona item
  const checkParaMostrar = document.querySelector(`.${bebidaSelecionada} .check`);

  const botao = document.querySelector(`.${bebidaSelecionada}`);
  botao.classList.remove("no-border");
  botao.classList.add("item-selected");

  checkParaMostrar.classList.add("show");

  habilitarBotao();
}

function selecionarSobremesa(sobremesaSelecionada, preco) {
  sobremesa = sobremesaSelecionada;
  precoSobremesa = Number(preco)
  const botaoSelecionado = document.querySelector(".sobremesa .item-selected");

  if (botaoSelecionado !== null) {
    const checkParaRemover = document.querySelector('.sobremesa .show');

    botaoSelecionado.classList.remove("item-selected");
    botaoSelecionado.classList.add("no-border");
  }

  // seleciona item
  const checkParaMostrar = document.querySelector(`.${sobremesaSelecionada} .check`);

  const botao = document.querySelector(`.${sobremesaSelecionada}`);
  botao.classList.remove("no-border");
  botao.classList.add("item-selected");

  checkParaMostrar.classList.add("show");

  habilitarBotao();
}

function habilitarBotao() {
  // verificar se existem 3 itens selecionado
  if (prato !== "" && bebida !== "" && sobremesa !== "") {
    const botaoFinalizar = document.querySelector(".botao");
    botaoFinalizar.classList.add("botao-habilitado");

    const paragrafo = document.querySelector(".primeira-mensagem");
    paragrafo.innerHTML = `Fechar pedido`;
  }
}

function fecharPedido() {
  let soma = precoPrato + precoBebida + precoSobremesa
  const texto = encodeURIComponent(
    `Olá, gostaria de fazer o pedido:\n
  - Prato: ${prato}\n
  - Bebida: ${bebida}\n
  - Sobremesa: ${sobremesa}
  Total: R$ ${soma.toFixed(2)}`
  );

  window.open(`https://wa.me/351910040944?text=${texto}`);
}
