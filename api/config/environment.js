const username = process.env.USER_NAME || '';
const password = process.env.PASSWORD || '';
const host = process.env.HOST || '';
const port = process.env.PORT || '';
const database = process.env.DATABASE || '';
const params = process.env.PARAMS || '';
const secret = process.env.SECRET || '';

let uri = 'mongodb://';
if (username && password) {
  uri += `${username}:${password}@`;
}

uri += `${host}:${port}/${database}${params}`;

module.exports = {
  mongodb: { uri },
  secret,
};
