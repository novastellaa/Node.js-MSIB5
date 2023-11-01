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

        return queryInterface.bulkInsert('Kategoris', [{
                name: "Petualangan",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Bajak Laut",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Ninja",
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

        return queryInterface.bulkDelete("Kategoris", null, {})
    }
};