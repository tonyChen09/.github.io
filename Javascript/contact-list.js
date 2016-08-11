var daftarKontak = [];

var Program = {
		tambahKontak : function(nama, email, telepon)
		{
			daftarKontak.push(nama,email,telepon);
		},
		lihatSemua : function()
		{
			for(i=0;i<(daftarKontak.length/3);i++){
			document.write("nama : "+daftarKontak[0]+"<br>email : "+daftarKontak[1]+"<br>telepon : "+daftarKontak[2]+"<br>");
			}
		}
		,
		cariKontak(nama)
		{
			
		}
}


Program.tambahKontak("tony","tony_chen93@yahoo.com","324234312");
Program.tambahKontak("Andy","andy_chen@yahoo.com","1313444");

Program.lihatSemua();
