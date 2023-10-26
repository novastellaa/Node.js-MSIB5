// menampilkan data dengan spesifik

/* NOTEEEEE !!!
- jika data nya lebih dari satu maka outputnya berupa array
- jika datanya cuman 1 maka outputnya berupa object
*/




const { author, books } = require('./model');

// author
async function getAuthor() {
    const authors = await author.findOne({
        where: 2,
    });
    console.log("detail author", authors.dataValues);
}
// getAuthor();


// books
async function getBooks() {
    const book = await books.findOne({
        where: 2,
    });
    console.log("detail books", book.dataValues);
}
getBooks();


// categories
async function getAuthor() {
    const authors = await author.findOne({
        where: 2,
    });
    console.log("detail author", authors.dataValues);
}
// getAuthor();