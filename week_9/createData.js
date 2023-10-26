// memasukkan data kedalam tabel

const { author, books, categories } = require("./model")

async function createdAuthor() {
    const data = [{ // jika ingin memasukan data secara banyakan bisa menggunakan aray
            name: "erlangga"
        },
        {
            name: "sinar dunia"
        },
        {
            name: "najwa sihab"
        }
    ];

    // jalankan query
    try {
        const createdAuthor = await author.bulkCreate(data) // jika hanya memasukan 1 data gunakan create (author.create) 
        console.log('tambah data berhasil')
    } catch (err) {
        console.log(Err)
    }
}

async function createdBooks() {
    const data = [{ // jika ingin memasukan data secara banyakan bisa menggunakan aray
            title: "belajar membaca"
        },
        {
            title: "tegak bersambung"
        },
        {
            title: "mata najwa"
        }
    ];
    try {
        const createdBooks = await books.bulkCreate(data)
        console.log("tambah data berhasil")
    } catch (err) {
        console.log(err)
    }
}

async function createdCategories() {
    const data = [{ // jika ingin memasukan data secara banyakan bisa menggunakan aray
            name: "pendidikan"
        },
        {
            name: "politik"
        }
    ];
    try {
        const createdCategories = await categories.bulkCreate(data)
        console.log("tambah data berhasil")
    } catch (err) {
        console.log(err)
    }
}

createdAuthor();
createdBooks();
createdCategories();