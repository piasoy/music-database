
exports.up = function(knex) {
  return knex.schema.createTable('album', (table) =>{
      table.increments('id')
      table.string('title')
      table.integer('year')
      table.integer('artist_id')
  })
};

exports.down = function(knex) {
  return schema.raw('DROP TABLE album')
};
