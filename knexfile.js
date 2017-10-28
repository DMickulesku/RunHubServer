module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/runhubDB'
  },

  // production: {
  //   client: 'pg',
  //   connection: process.env.DATABASE_URL + '?ssl=true'
  // },
};
