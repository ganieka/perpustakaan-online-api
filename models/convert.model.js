const pool = require('../db');

function updateImage(data, callback) {
  var query = `update buku
    set image = '${data.image}'
    where id = ${data.id}
  `
  pool.query(query, (error, results) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
}

module.exports = {
  updateImage
};