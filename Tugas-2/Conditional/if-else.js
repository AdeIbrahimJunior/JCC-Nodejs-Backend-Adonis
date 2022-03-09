var Nama = "Ade"
var Peran = "Penyihir"

if ( Nama == "") {
    console.log("Nama harus diisi!")
}else if ( Nama == "Ade" && Peran == "") {
    console.log ("Hallo" + Nama + "Pilih peranmu untuk memulai game")
}else if ( Nama == "Ade" && Peran == "Penyihir"){
    console.log("Selamat datang di dunia Warewolf," + Nama )
    console.log ("Halo, " +  Peran + " " +  Nama + " Kamu akan melindungi temanmu dari serangan Warewolf.")
}else if ( Nama == "Junaedi" && Peran == "Warewolf"){
    console.log( "Selamat datang di dunia WareWolf, Junaedi")
    console.log (" Halo WareWolf Junaedi, Kamu akan memakan mangsa setiap malam" )
}