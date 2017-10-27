

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/runHub'
  },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL + '?ssl=true'
  // },
};
