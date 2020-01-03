class pesan{

	constructor(){
		this.nama=document.getElementById("input_form").value;
		this.email=document.getElementById("input_email").value;
		this.pesan=document.getElementById("input_pesan").value;
	}

	cetak(){
		var arr = [];
		arr[0] = this.nama;
		arr[1] = this.email;
		arr[2] = this.pesan;

		alert(arr);
		// document.getElementById("hasil").innerHTML=this.nama;
		// document.getElementById("hasil1").innerHTML=this.email;
	}
	

}
	function tes(){
	pesan = new pesan();
	pesan.cetak();
}

 function konfirmasi(){
	confirm(" Kirim Sekarang? ");

}