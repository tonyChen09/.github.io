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
		cariKontak : function(nama)
		{
			for(i=0;i<daftarKontak.length;i++){
			if( nama == daftarKontak[i])
			{
				document.write(daftarKontak[i]+daftarKontak[i+1]+daftarKontak[i+2]);
			}
			}
		}
}


Program.tambahKontak("tony","tony_chen93@yahoo.com","324234312");
Program.tambahKontak("Andy","andy_chen@yahoo.com","1313444");

Program.lihatSemua();
Program.cariKontak("Andy");
