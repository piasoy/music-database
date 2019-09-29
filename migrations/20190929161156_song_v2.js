
exports.up = function(knex) {
    return knex.schema.createTable('song', (table) =>{
        table.increments('id')
        table.string('song_title')
        table.integer('length_in_seconds')
        table.integer('album_id')
    } )
};

exports.down = function(knex) {
    return knex.schema.raw('DROP TABLE song')
};
