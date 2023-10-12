//Variaveis
const inputUm = document.querySelector(".textoUm");
const inputDois = document.querySelector(".textoDois");

//Botão para codificar
function btnCodificar() {
	const textoCodificado = codificar(inputUm.value);
	inputDois.value = textoCodificado
}

function codificar(stringCodificada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringCodificada = stringCodificada.toLowerCase();

	for(let i= 0; i < matrizCodigo.length; i++) {
		if(stringCodificada.includes(matrizCodigo[i][0])) {
			stringCodificada = stringCodificada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringCodificada;
}

//Decodificando
function btnDecodificar() {
	const textoDecodificado = decodificar(inputUm.value)
	inputDois.value = textoDecodificado
}

function decodificar(stringDecodificada) {
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	stringDecodificada = stringDecodificada.toLowerCase();

	for(let i= 0; i < matrizCodigo.length; i++) {
		if(stringDecodificada.includes(matrizCodigo[i][1])) {
			stringDecodificada = stringDecodificada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
		}
	}
	return stringDecodificada;
}


//Botão para copiar 

function copiar() {
    const msg = document.querySelector(".textoDois");
    msg.select();
    navigator.clipboard.writeText(inputDois.value)
    msg.value = "";
}