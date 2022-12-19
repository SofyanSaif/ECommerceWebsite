document.getElementById("myButton").onclick = function(){

    // menampilkan pop up untuk memasukan jumlah pesanan
         var jml = prompt("Masukkan Jumlah Pesanan :  ");
         // rumus untuk menghitung jumlah pesanan dikali harga 
         var jumlah =   jml * 18000;
         // jika produk yang dibeli lebih dari sama dengan 10 maka proses pembayaran akan berlanjut
         if (jml >= 20 ) {
           // menampikan tulisan di halaman web
             document.write(`Produk yang anda pesan adalah  : <b>Vegemil BlackBean Soybean Milk</b><br>`);
             // menampilkan jumlah barang yang diinputkan pada variabel jml di halaman web
             document.write(`Jumlah pesanan anda : <b>${jml}</b><br>`);
              // menampilkan total harga yang sudah dihitung pada variabel jumlah di halaman web
             document.write(`Total harga : Rp <b>${jumlah}</b>`);
             
         }
         // jika jumlah produk yang dipesan tidak sesuai makan proses pembayaran gagal
         else   {
           // menampikan pop up berupa tulisan saja dan tidak ada kolom input
             alert('Minimal pembelian tidak sesuai');
             // mengelinkan tombol "ok" yang ditekan ke halaman celana.html
             document.location.href = "ghaurmilk.html";
             
             
         }
         document.write("<p> Terima Kasih dah mampir <p>");
             document.write("<p> Untuk melanjutkan tranksasi silahkan ss halaman ini dan kirim wa di link di bawah ini <p>");
             document.write("<a href= 'http://wa.me/6287860462909'>Link WA</a>");
 }