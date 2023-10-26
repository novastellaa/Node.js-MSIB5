//menampilkan data author, books, categories

const { books, author, categories } = require('./model');

// author
async function getAuthor() {
    const authors = await author.findAll({
        where: {
            id: 2
        }
    });
    const mapAuthors = authors.map((d) => ({
        id: d.id,
        name: d.name,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt
    }))
    console.log("author :", mapAuthors);
};

getAuthor();


// books
async function getBooks() {
    const Books = await books.findAll();
    const mapBooks = Books.map((d) => ({
        id: d.id,
        title: d.title,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt
    }));
    console.log("Books :", mapBooks);
};

getBooks();


// categories
async function getCategories() {
    const Categori = await categories.findAll();
    const mapCategories = Categori.map((d) => ({
        id: d.id,
        name: d.name,
        createdAt: d.createdAt,
        updatedAt: d.updatedAt
    }));
    console.log("Categories :", mapCategories);
};

getCategories();

/* 

- jika data nya lebih dari satu maka outputnya berupa array
- jika datanya cuman 1 maka outputnya berupa object
- ada 3 cara untuk menampilkan data
1. menggunakan findAll untuk menampilkan semua data
2. menngunakan findCountAll untuk menampilkan semua data dan jumlah data beserta isinya
3. menggunakan finOne untuk menampilkan data yang spesifik

*/