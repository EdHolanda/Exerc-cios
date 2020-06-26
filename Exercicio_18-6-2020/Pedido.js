//Armazenamento dos valores para cálculo do total a pagar
totalItens = [];

//Função para cadastrar os itens do pedido
const cadastrarItemPedido = () =>{

	var produto = document.getElementById("produto").value;
	var quantidade = parseInt(document.getElementById("quantidade").value);
	var preco = parseFloat(document.getElementById("preco").value);
	var total = quantidade * preco;

	//Validação de preenchimento dos campos
	var mensagem = "";

	if(produto == ""){
		mensagem += "Produto\n";
	}
	if(quantidade == ""){
		mensagem += "Quantidade\n";
	}
	if(preco == ""){
		mensagem +="Preço\n";
	}
	if(mensagem != ""){
		alert("Os seguintes campos estão em branco:\n" + mensagem);
		return;
	}

	//Lista dos itens da venda
	var itens = "<tr>"
	itens += "<td>" + produto + "</td>";
	itens += "<td>" + preco + "</td>";
	itens += "<td>" + quantidade + "</td>";
	itens += "<td>" + total + "</td>";
	itens += "</tr>";
	document.getElementById("vendas").innerHTML += itens;

	//Armazenando os totais individuais para o cálculo do total a pagar
	totalItens.push(total)

	//Zerando os campos de registro dos itens
	document.getElementById("produto").value = "";
	document.getElementById("quantidade").value = "";
	document.getElementById("preco").value = "";

	document.getElementById("produto").focus();

}
//Função para esconder o form de registro dos itens
const esconderRegistrar = () =>{
	document.getElementById("registrar").style = "display:none";
	document.getElementById("mostrarRegistrar").style = "display:block";
}
//Função para exibir o form de registro dos itens com validação em caso de encerramento
const mostrarRegistrar = () =>{
	if(document.getElementById("troco").value != ""){
		return;
	}
	else{
		document.getElementById("registrar").style = "display:block";
		document.getElementById("mostrarRegistrar").style = "display:none";
	}
}
