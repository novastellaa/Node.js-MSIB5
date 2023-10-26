const { author, books, categories } = require("./model");

async function deleteAuthor() {
    const deleteAuthor = await author.destroy({
        where: {
            id: 4
        }
    })
    console.log('data berhasil dihapus !')
}

deleteAuthor();