`use strict`;

module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(`Users`, [{
      firstName: `Jane`,
      lastName: `Doe`,
      username: `demo`,
      email: `demo@demo.com`,
      pswd: `superwoman`,
      status: `true`,       
     },
     {
      firstName: `Sonja`,
      lastName: `Smith`,
      username: `smithy`,
      email: `gogo@smith.com`,
      pswd: `wonderwoman`,
      status: `true`,   
      },  
      {
      firstName: `Rory`,
      lastName: `Belle`,
      username: `belley`,
      email: `rory@sam.com`,
      pswd: `happywoman`,
      status: `true`, 
      },
    ], 
{});
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete(`Users`, null, {});
 }
};