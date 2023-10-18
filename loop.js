// let angka = 1

// // do while mengeksekusi dulu baru di cek
// do{
//     console.log("do while di eksekusi")
//     angka++;
// }while(angka == 8)

// // while di cek dulu baru di ekssekusi
// while(angka == 8) {
//     console.log("while di eksekusi");
//     angka++;
// }

// const asal_mhs = {
//     arya: "Lombok",
//     Erik: "Pontianak",
//     abil: "Manado",
//     irsyad: "Jombang",
//     baihaqi: {
//         asal:"mojokerto",
//         jeniskelamin: "pria",
//         hobi: {
//             rumah: "nonton film",
//             luar_rumah: "bermain bola"
//         }
//     }
// }

// console.log(asal_mhs);

// const nama_mhs = [
//     'hasan',
//     'yazid', 
//     'haeril',
//     'nanto',
//     'budi'
// ]


// // for untuk array (for of)
// for (let nama of nama_mhs){
//     console.log(nama);
// }

// // for untuk objek (for in)
// for (let asal in asal_mhs){
//     console.log(asal_mhs[asal]);
// }

// asal_mhs["baihaqi"] = "mojokerto"
// asal_mhs["annadvi"] = "Jombang"


// delete asal_mhs.arya
// console.asal_mhs.arya

// const kelas_ppl = {
//     "nama" : "pengembangan perangkat lunak",
//     "jumlah" : 15,
//     "istilah" : "sofware developer"
// }

// const kelas_dm = {
//     "nama" : "digital marketing",
//     "jumlah" : 23,
//     "istilah" : "madinah",
//     "fokus" : "jualan online"
// }

// const kelas_petik = [kelas_ppl, kelas_dm]

// for (kelas of kelas_petik) {
//     console.log(kelas);
// }

const erik_proplayer = {
    nama : "AEerknov26",
    umur : "18",
    hero : "lapu-lapu",
}

const erik_squad = {
    nama : "xuanzheviny",
    umur : "18",
    hero : "gusion"
}

const hero_erik = {
    nama : "M.fajri88",
    umur : "18",
    hero : "top provinsi kalbar lapu"
}
const hero_top = {
    nama : "dzulkifly88",
    umur : "22",
    hero : "lapu lapu"
}
const squad_top = {
    nama : "SP Pemuda",
    umur : "4",
    hero : "all roll"
}

const mobilelegend = [erik_proplayer,erik_squad,hero_erik,hero_top,squad_top]
for (ml of mobilelegend) {
    console.log(ml)
}

for(ml in erik_proplayer) {
    console.log(ml + '='+ erik_proplayer[ml])
}
for(ml in erik_squad) {
    console.log(ml + '='+ erik_squad[ml])
}
for(ml in hero_erik) {
    console.log(ml + '='+ hero_erik[ml])
}
for(ml in hero_top) {
    console.log(ml + '='+ hero_top[ml])
}
for(ml in squad_top) {
    console.log(ml + '='+ squad_top[ml])
}