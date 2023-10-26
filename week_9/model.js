const { Sequelize, DataTypes } = require('sequelize');

const sq = new Sequelize('book_store', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

try {
    sq.authenticate();
    console.log('conection succes');
} catch (err) {
    console.log(err)
}


// model author
const author = sq.define('author', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name"
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "updated_at"
    }
}, {
    tableName: 'author',
    modelName: 'author'
});


// model books
const books = sq.define('books', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "title"
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "updated_at"
    }
}, {
    tableName: 'books',
    modelName: 'books'
});


// model categories
const categories = sq.define('books', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: "id"
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name"
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "created_at"
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        field: "updated_at"
    }
}, {
    tableName: 'categories',
    modelName: 'categories'
});



const getBooks = async() => {
    return await books.findAll();
};
const getAuthor = async() => {
    return await author.findAll();
};
const getCategories = async() => {
    return await categories.findAll();
};



console.log("author", getAuthor);
console.log("books", getBooks);
console.log("categories", getCategories);

module.exports = { author, books, categories }