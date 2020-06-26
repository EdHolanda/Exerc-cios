//Cálculo do total da venda
const calcularTotal = () => {
	if(totalItens == ""){
		alert("Lista de itens vazia.\nPor favor, registre os itens.")
	}
	else{
		valorTotal = 0;
			for(i=0;i<totalItens.length;i++){
			valorTotal += parseFloat(totalItens[i]);
		}
	document.getElementById("totalAPagar").value = valorTotal;
	}
	
}

//Cálculo do troco
const calcularTroco = () => {
	var recebido = parseFloat(document.getElementById("recebido").value);
	var valorTotal = parseFloat(document.getElementById("totalAPagar").value)

	if(document.getElementById("recebido").value == ""){
		alert("Digite o valor recebido");
		document.getElementById("recebido").focus();
		return;
	}
	if(valorTotal < recebido){
		troco = recebido - valorTotal;
	}
	else if(valorTotal > recebido){
		alert("Valor recebido menor que o total.");
		document.getElementById("recebido").value = "";
		document.getElementById("recebido").focus();
		return;
	}
	else{
		troco = 0;
	}

	document.getElementById("recebido").setAttribute("readonly", true);//Bloqueando a edição do valor recebido após validação
	document.getElementById("troco").value = troco;
}