function calcular() {
	let numero1 = calculadora.numero1.value;
	let numero2 = calculadora.numero2.value;
	let operacao = calculadora.operacao.value;
	if(operacao == "+") {
		let intNumero1 = parseFloat(numero1);
		let intNumero2 = parseFloat(numero2);
		let soma = intNumero1 + intNumero2;
		window.alert("O Resultado da soma é: " + soma);
		if(soma % 2 == 0) {
			window.alert("O Resultado da soma é par !!");
		}else {
			window.alert("O Resultado da soma é impar !!");
		}
	}else if(operacao == "-") {
		let intNumero1 = parseFloat(numero1);
		let intNumero2 = parseFloat(numero2);
		let subtrair = intNumero1 - intNumero2;
		window.alert("O Resultado da subtração é: " + subtrair);
		if(subtrair % 2 == 0) {
			window.alert("O Resultado da subtração é par !!");
		}else {
			window.alert("O Resultado da subtração é impar !!");
		}
	}else if(operacao == "*") {
		let intNumero1 = parseFloat(numero1);
		let intNumero2 = parseFloat(numero2);
		let multiplicar = intNumero1 * intNumero2;
		window.alert("O Resultado da multiplicação é: " + multiplicar);
		if(multiplicar % 2 == 0) {
			window.alert("O Resultado da multiplicação é par !!");
		}else {
			window.alert("O Resultado da multiplicação é impar !!");
		}
	}else if(operacao == "/") {
		let intNumero1 = parseFloat(numero1);
		let intNumero2 = parseFloat(numero2);
		let dividir = intNumero1 / intNumero2;
		window.alert("O Resultado da divisão é: " + dividir);
		if(dividir % 2 == 0) {
			window.alert("O Resultado da divisão é par !!");
		}else {
			window.alert("O Resultado da divisão é impar !!");
		}
	}else {
		window.alert("Operação não definida !!");
	}
}