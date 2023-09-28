// contoh mengambil data di array 
const names = ['nova', 'stella'];
const firstName = names[0];
const middletName = names[1];

console.log(firstName);

//contoh mengambil data menggunakan destructuring
const nama = ['ijat', 'kamal', 'jamaludin', 'bahri'];
const [firstNama, lastNama, ...others] = nama; // others untuk menyimpan array 
console.log(firstNama);
console.log(others); // outputnya berupa array

// mengambil data di object
const person = {
    namaku: 'novastella',
    address: {
        street: 'jendral sudirman',
        city: 'bekasi',
        country: 'indonesia'
    },
    hobby: 'ngoding',
    sosmed: 'novastella_'
};

const hobby = person.hobby;
const namaku = person.namaku;
const sosmed = person.sosmed;
console.log(sosmed);

// mengambil data di object menggunakan destrutur
const orang = {
    nickname: 'novastella',
    alamat: {
        jalan: 'jendral sudirman',
        kota: 'bekasi',
        negara: 'indonesia'
    },
    hobi: 'ngocok',
    media: 'novastella_'
};

let { nickname, alamat: { jalan, kota, negara }, hobi, media } = orang; //kita bisa destructure nested object alamat, kita tidak bisa memanggil alamatnya
console.log(jalan);
// console.log(alamat); //error

// function param 
{
    function display(siswa) {
        console.log(siswa.firstName);
        console.log(siswa.middleName);
        console.log(siswa.lastName);
    }

    const siswa = {
        firstName: 'muhammad',
        middleName: 'nova',
        lastName: 'stella'
    };
    display(siswa);
}
//contoh destructuring function param
{
    function displayParam({ id, namaLengkap, mapel }) {
        console.log(id);
        console.log(namaLengkap);
        console.log(mapel);
    }

    const guru = {
        id: 12002993,
        namaLengkap: 'indah sukmawati',
        mapel: 'matematika'
    };
    displayParam(guru);
}