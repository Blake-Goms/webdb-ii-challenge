// up are the changes to make to the schema
exports.up = function(knex) {
    return knex.schema.createTable('dealer', tbl => {
        //primary key,called id, integer, autoincrements
        tbl.increments();
        tbl
            .string('vin', 17)
            .unique()
            .notNullable();
        tbl
            .string('make', 20)
            .notNullable();
        tbl
            .string('model', 20)
            .notNullable();
        tbl
            .decimal('miles')
            .notNullable()
        tbl
            .integer('transmission')
        tbl
            .string('status')
    })
};

// how we undo the changes made int he up function
exports.down = function(knex) {
    return knex.schema.dropTableIfExist('dealer');
};
