

var jempolPengguna="jempol";
	var telunjukPengguna="telunjuk";
	var kelingkingPengguna="kelingking";
	var choice;
choice = prompt("jempol/telunjuk/kelingking?");
if(choice == jempolPengguna)
	{
		document.write("pilihan pengguna : "+jempolPengguna);
		document.write("<br>");
	}else if(choice == telunjukPengguna)
	{
		document.write("pilihan pengguna : "+telunjukPengguna);
		document.write("<br>");
	}else if(choice == kelingkingPengguna)
	{
		document.write("pilihan pengguna : "+kelingkingPengguna);
		document.write("<br>");
	}
	
	

	var jempolLawan="jempol";
	var telunjukLawan="telunjuk";
	var kelingkingLawan="kelingking";
	var random = (Math.random()*1)+0;
	var pilihanLawan;
	if(random >= 0 && random <= 0.33)
	{
		pilihanLawan = jempolLawan;
		document.write("pilihan lawan : "+jempolLawan);
		document.write("<br>");
	}else if(random > 0.33 && random <= 0.66)
	{
		pilihanLawan = telunjukLawan;
		document.write("pilihan lawan : "+telunjukLawan);
		document.write("<br>");
	}else if(random > 0.66 && random <= 1)
	{
		pilihanLawan = kelingkingLawan;
		document.write("pilihan lawan : "+kelingkingLawan);
		document.write("<br>");
	}


function bertarung(a,b)
{
	if(a==b)
	{
		document.write("seri");
	}else if(a != b)
	{
		if(a == "jempol" && b == "telunjuk")
		{
			document.write("Pengguna menang!");
		}
		else if(a == "jempol" && b == "kelingking")
		{
			document.write("Lawan menang!");
		}else if(a == "telunjuk" && b == "jempol")
		{
			document.write("lawan menang!");
		}else if(a == "telunjuk" && b == "kelingking")
		{
			document.write("Pengguna menang!");
		}else if(a == "kelingking" && b == "telunjuk")
		{
			document.write("Lawan menang!");
		}else if(a == "kelingking" && b == "jempol")
		{
			document.write("Pengguna menang!");
		}
	}
}

bertarung(choice,pilihanLawan);






	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
