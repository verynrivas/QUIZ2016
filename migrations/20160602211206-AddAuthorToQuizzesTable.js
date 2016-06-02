'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
      return  queryInterface.addColumn( 'Quizzes', 
                                        'AuthorId', 
                                        { type: Sequelize.INTEGER }
                                      );
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.removeColumn('Quizzes','AuthorId');
  }
};
