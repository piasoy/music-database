
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('album').del()
    .then(function () {
      // Inserts seed entries
      return knex('album').insert([
        {title: 'Baduizm', year: 1997, artist_id: 1},
        {title: 'One In A Million', year: 1996, artist_id: 2},
        {title: 'Miss Thang', year: 1995, artist_id: 3},
        {title: 'Brandy', year: 1994, artist_id: 4},
        {title: 'The Velvet Rope', year: 1997, artist_id: 5},
        {title: 'The Miseducation of Lauryn Hill', year: 1998, artist_id: 6},
        {title: 'My Love Is Your Love', year: 1998, artist_id: 7},
        {title: 'What’s The 411?', year: 1992, artist_id: 8},
        {title: 'Toni Braxton', year: 1993, artist_id: 9},
        {title: 'Daydream', year: 1995, artist_id: 10},
      
      ]);
    });
};
