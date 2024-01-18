import db from "../../index"

const createReview = async (user_id, content, mediaType, mediaId, mediaTitle, mediaPoster) => {
    const query = `
      INSERT INTO review (user_id, content, mediaType, mediaId, mediaTitle, mediaPoster)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    db.query(query, [user_id, content, mediaType, mediaId, mediaTitle, mediaPoster], (err, results) => {
      if (err) {
        console.error('Error creating review:', err);
      } else {
        console.log('Review created successfully');
      }
    });
  };
  
const getReviewById = (reviewId, callback) => {
    const query = 'SELECT * FROM review WHERE id = ?';
  
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
    createReview,
    getReviewById,

  };