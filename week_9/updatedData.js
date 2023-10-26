const { author, books, categories } = require("./model");

async function updatedAuthor() {
    const getData = await author.findOne({
        where: 2
    })
    console.log("data sebelum diubah", getData)
    const data = {
        name: 'Echiro Oda'
    }
    const updatedAuthor = await author.update(data, {
        where: {
            id: 2
        }
    })

    console.log('data berhasil di perbarui :', data)
}

updatedAuthor();