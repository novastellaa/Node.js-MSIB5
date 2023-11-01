'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('Penulis', [{
                name: "Tite Kubo",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Eechiro Oda",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Masashi Kishimoto",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])

    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */

        return queryInterface.bulkDelete('Penulis', null, {})
    }
};