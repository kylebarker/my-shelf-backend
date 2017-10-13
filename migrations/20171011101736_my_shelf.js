exports.up = function(knex, Promise) {
  return knex.schema.createTable('my_shelf', function(table){
    table.increments();
    table.string('artist');
    table.string('album');
    table.string('year');
    table.string('genre');
    table.string('image_url');
    table.string('label');
    table.string('discogs_id');
    table.string('cat_num');
    table.string('print_year');
    table.string('color');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('my_shelf');
};
