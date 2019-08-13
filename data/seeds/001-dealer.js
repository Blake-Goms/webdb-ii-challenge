
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dealer')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dealer').insert([
        {
          vin: '123456',
          make: 'ram',
          model: '1500',
          miles: '100',
          transmission: 8,
          status: 'clean'
        },
        {
          vin: '234567',
          make: 'chevy',
          model: '1500',
          miles: '200',
          status: 'rebuilt'
        },
        {
          vin: '345678',
          make: 'ford',
          model: '150',
          miles: '300',
          transmission: 10,
          status: 'salvaged'
        },
      ]);
    });
};
