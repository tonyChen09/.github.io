function pangkatAngka(a,b)
{
	return Math.pow(a,b);
}
function akarKuadrat(a)
{
	return Math.sqrt(a);
}
function hipotenusa(a,b)
{
	
	return Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));
}

function luasLingkaran(a)
{
	
	return Math.round(Math.PI*Math.pow(a,2));
}


document.writeln("luas lingkaran "+luasLingkaran(7));
document.write("<br>");
document.writeln("hipotenusa "+hipotenusa(3,4));
document.write("<br>");
document.writeln("pangkat angka "+pangkatAngka(2,3));
document.write("<br>");
document.writeln("akar kuadrat "+akarKuadrat(9));
