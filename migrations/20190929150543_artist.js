
exports.up = function(knex) {
    return knex.schema.createTable('artist', (table) => {
        table.increments('id')
        table.string('name')
    })
};

exports.down = function(knex) {
    knex.schema.raw('DROP TABLE artist')
};
