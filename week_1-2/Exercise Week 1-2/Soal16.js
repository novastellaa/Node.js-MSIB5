function cekLogin(username, password) {
    if (username == 'admin' && password == 12345) {
        return (`Login Berhasil`)

    } else {
        return ('Login Gagal')
    }
}

let username = 'zxo';
let password = 12345;
const pesan = cekLogin(username, password);
console.log(pesan);