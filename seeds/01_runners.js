
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "runners"; ALTER SEQUENCE runners_id_seq RESTART WITH 6;')
    .then(function () {
      // Inserts seed entries
      var runners = [
        {
          id: 1,
          first_name: 'Dan',
          last_name: 'Mickulesku',
          email: 'danmickulesku@gmail.com'
        },

        {
          id: 2,
          first_name: 'Mark',
          last_name: 'Bunkall',
          email: 'markbunkall001@gmail.com'
        },

        {
          id: 3,
          first_name: 'Randy',
          last_name: 'George',
          email: 'randygeorge002@gmail.com'
        },

        {
          id: 4,
          first_name: 'Josh',
          last_name: 'Quinn',
          email: 'joshquinn003@gmail.com'
        },

        {
          id: 5,
          first_name: 'Brian',
          last_name: 'Bruno',
          email: 'brianbruno004@gmail.com'
        },
      ];
    return knex('runners').insert(runners)
    });
};
