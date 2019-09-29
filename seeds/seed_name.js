
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(function () {
      // Inserts seed entries
      return knex('artist').insert([
        {name: 'Erykah Badu'},
        {name: 'Aaliyah'},
        {name: 'Monica'},
        {name: 'Brandy'},
        {name: 'Janet Jackson'},
        {name: 'Lauryn Hill'},
        {name: 'Whitney Houston'},
        {name: 'Mary J. Blige'},
        {name: 'Toni Braxton'},
        {name: 'Mariah Carey'}
       
      ]);
    });
};
