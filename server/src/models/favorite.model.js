import db from "../../index"

const createFavorite = async (user_id, content, mediaType, mediaId, mediaTitle, mediaPoster) => {
    const query = `
      INSERT INTO favorite (user_id, content, mediaType, mediaId, mediaTitle, mediaPoster)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    db.query(query, [user_id, content, mediaType, mediaId, mediaTitle, mediaPoster], (err, results) => {
      if (err) {
        console.error('Error creating favorite:', err);
      } else {
        console.log('Favorite created successfully');
      }
    });
  };
  
const getReviewByUser = (user_id, callback) => {
    const query = 'SELECT * FROM favorite WHERE user_id = ?';
  
    db.query(query, [reviewId], (err, results) => {
      if (err) {
        console.error('Error fetching review:', err);
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    });
  };

module.exports = {
    createFavorite,
    getFavoriteByUser,

  };