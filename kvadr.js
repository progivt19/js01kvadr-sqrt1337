// напишите функции x1 и x2 и измените функцию solve, 
// так, чтобы она показывала решения (решение) 
// уравнения, введенного пользователем на странице 

function solve() {
	// получаем данные в виде строк из полей ввода на странице
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	// получаем числа из строк
	a = parseFloat(a);
	b = parseFloat(b);
	c = parseFloat(c);	
	// дальше вам надо заменить код, чтобы он показывал решения,
	// или строку "РЕШЕНИЙ НЕТ", если дискриминант уравнения < 0
	alert(D(a,b,c));
}

function D(a,b,c){
	// вычисление дискриминанта по формуле
	return b*b - 4*a*c;
}

function x1(a,b,c,D){
	// вычисление меньшего корня
}
