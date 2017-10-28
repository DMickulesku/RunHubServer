
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "runner"; ALTER SEQUENCE runner_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      var runner = [
        {
          id: 1,
          firstName: 'Dan',
          lastName: 'Mickulesku',
          email: 'danmickulesku@gmail.com'
        },

        {
          id: 2,
          firstName: 'Mark',
          lastName: 'Bunkall',
          email: 'markbunkall001@gmail.com'
        },

        {
          id: 3,
          firstName: 'Randy',
          lastName: 'George',
          email: 'randygeorge002@gmail.com'
        },

        {
          id: 4,
          firstName: 'Josh',
          lastName: 'Quinn',
          email: 'joshquinn003@gmail.com'
        },

        {
          id: 5,
          firstName: 'Brian',
          lastName: 'Bruno',
          email: 'brianbruno004@gmail.com'
        },
      ];
    return knex('runner').insert(runner)
    });
};
