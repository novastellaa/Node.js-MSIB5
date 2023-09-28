--soal 1
CREATE DATABASE books_store;
USE books_store;

CREATE TABLE books (
id_buku INT NOT NULL,
judul_buku VARCHAR(255) NOT NULL,
pengarang VARCHAR(255),
tahun_terbit YEAR,
penerbit VARCHAR(255),
tanggal_dibuat DATE,
tanggal_diupdate DATE,
PRIMARY KEY (id_buku)
);

CREATE TABLE category (
id_category INT NOT NULL,
nama_category VARCHAR(255),
tanggal_dibuat DATE,
tanggal_diupdate DATE,
PRIMARY KEY (id_category)
);

--soal 2
INSERT INTO books VALUES 
(1, 'Building Microservices', 'Sam Newman', '2014', 'O''Reilly Media', '2023-09-18', '2023-09-18'),
(2, 'Clean Code', 'Robert C. Martin', '2008', 'Prentice Hall', '2023-09-18', '2023-09-18'),
(3, 'The Pragmatic Programmer', 'Andrew Hunt', '1999', 'Addison-Wesley', '2023-09-18', '2023-09-18'),
(4, 'Design Patterns','Erich Gamma','1994','Addison-Wesley', '2023-09-18', '2023-09-18'),
(5, 'Introduction to Algorithms','Thomas H.Cormen','1990','MIT Press','2023-09-18', '2023-09-18'),
(6, 'The Art of Computer Prog.','Donald E.Knuth','1968','Addison-Wesley','2023-09-18', '2023-09-18'),
(7, 'Clean Architecture','Robert C.Martin','2017','Prentice Hall','2023-09-18', '2023-09-18'),
(8, 'Refactoring','Martin Fowler','1999','Addison-Wesley','2023-09-18', '2023-09-18'),
(9, 'Domain-Driven Design','Eric Evans','2003','Addison-Wesley','2023-09-18', '2023-09-18'),
(10, 'The Mythical Man-Month','Frederick Books','1975','Addison-Wesley','2023-09-18', '2023-09-18');

INSERT INTO category VALUES
(1,'Pemrograman','2023-09-18','2023-09-18'),
(2,'Fiksi','2023-09-18','2023-09-18'),
(3,'Nonfiksi','2023-09-18','2023-09-18'),
(4,'Bisnis','2023-09-18','2023-09-18'),
(5,'Teknologi','2023-09-18','2023-09-18'),
(6,'Seni','2023-09-18','2023-09-18'),
(7,'Sejarah','2023-09-18','2023-09-18'),
(8,'Sains','2023-09-18','2023-09-18'),
(9,'Hukum','2023-09-18','2023-09-18'),
(10,'Kesehatan','2023-09-18','2023-09-18');

--soal 3
SELECT * FROM books;
SELECT * FROM category;

--soal 4
UPDATE books SET judul_buku = 'Building Microservices: Designing Fine-Grained Systems 1st',tahun_terbit = '2015', tanggal_diupdate = '2023-09-20' WHERE id_buku = 1;

--soal 5
DELETE FROM books WHERE id_buku = 10;
DELETE FROM category WHERE id_category = 10;

--soal 6
SELECT judul_buku FROM books WHERE penerbit = 'Addison-Wesley';
SELECT * FROM BOOKS WHERE tahun_terbit BETWEEN 2003 AND 2023;
SELECT * FROM books WHERE judul_buku LIKE '%design%';

--soal 7
CREATE TABLE book_categories (
    ->     id INT NOT NULL AUTO_INCREMENT,
    ->     id_category INT NOT NULL,
    ->     id_book INT NOT NULL,
    ->     tanggal_dibuat DATE,
    ->     tanggal_diupdate DATE,
    ->     PRIMARY KEY (id),
    ->     FOREIGN KEY (id_category) REFERENCES category (id_category),
    ->     FOREIGN KEY (id_book) REFERENCES books (id_buku)
    -> );

INSERT INTO book_categories (id_category, id_book, tanggal_dibuat, tanggal_diupdate)VALUES (1, 2, '2023-09-18', '2023-09-18');

--soal 8
INSERT INTO book_categories (id_category, id_book, tanggal_dibuat, tanggal_diupdate) VALUES (5,3, '2023-09-18', '2023-09-18'),(1,1, '2023-09-18', '2023-09-18');

--soal 9
SELECT books.id_buku AS id, books.judul_buku,category.nama_category FROM books LEFT JOIN category ON books.id_buku = category.id_category;

--soal 10
ALTER TABLE books ADD jumlah_halaman int;
