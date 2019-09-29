
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('song').del()
    .then(function () {
      // Inserts seed entries
      return knex('song').insert([
        {song_title: 'Next Lifetime', length_in_seconds: 387, album_id: 1},
        {song_title: 'One in a Million', length_in_seconds: 270, album_id: 2},
        {song_title: 'Don\'t Take It Personal', length_in_seconds: 258, album_id: 3},
        {song_title: 'I Wanna Be Down', length_in_seconds: 291, album_id: 4},
        {song_title: 'Got \'til It\'s Gone', length_in_seconds: 241, album_id: 5},
        {song_title: 'Doo-Wop', length_in_seconds: 320, album_id: 6},
        {song_title: 'My Love Is Your Love', length_in_seconds: 260, album_id: 7},
        {song_title: 'You Remind Me', length_in_seconds: 259, album_id: 8},
        {song_title: 'Breathe Again', length_in_seconds: 269, album_id: 9},
        {song_title: 'Fantasy', length_in_seconds: 248, album_id: 10}
      ]);
    });
};
 