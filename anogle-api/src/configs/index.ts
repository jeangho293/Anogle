const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error('There is no JWT_SECRET env.');
}
export const docs = {
  server: {
    port: process.env.PORT || 3000,
  },
  mysql: {
    username: 'root',
    password: '1234',
    database: 'anogle',
  },
  jwt: {
    secret: jwtSecret,
  },
};
