`use strict`;

module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert(`Jobs`, [{
      title: `Front End Developer`,
      description: `USe your brains and build an app with us.  Dog friendly office and lots of tea and coffee.`,
      post_date: `20180514`,
      company_name: `Doggy Media`,
      company_city: `Fairbanks`,
      company_state: `AK`, 
      keywords:`html, css. javascript, react`,
      apply_url: `www.dogmedia.com/applyhere`,
      company_url:`www.dogmedia.com`
     },
     { title: `Full Stack Developer`,
      description: `Must be kid friendly as we all bring our children to work, two and four legs allowed.  Looking for hard working individual to pair program , learn and build the future. `,
      post_date: `20180512`,
      company_name: `Kanter Web`,
      company_city: `Minneapolis`,
      company_state: `MN`, 
      keywords:`html, css. javascript, react, node, mysql, sequelize and everything else I know`,
      apply_url: `www.joe.com/applyhere`,
      company_url:`www.joe.com`  
     },
     { title: `Back End Developer`,
      description: `Like data and organizing the world, come work for us.  We are looking for someone interested in building our foundation and helping us organize for today. `,
      post_date: `20180512`,
      company_name: `Andrea Backbone Media`,
      company_city: `Saint Paul`,
      company_state: `MN`, 
      keywords:`mysql, sequelize, node, javascript, mongodb, mongoose`,
      apply_url: `www.andrea.net/applyhere`,
      company_url:`www.andrea.com`  
     },
    ], 
{});
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete(`Users`, null, {});
 }
};