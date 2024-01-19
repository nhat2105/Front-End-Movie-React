import db from "../../index";

const create = async (req, res) => {
  const user_id = req.body.user_id;
  const mediaId = req.body.mediaId;
  const content = req.body.content;
  const mediaType = req.body.mediaType;
  const mediaPoster = req.body.mediaPoster;
  const mediaTitle = req.body.mediaTitle;
  const query = `
    INSERT INTO review 
    (user_id, content, mediaType, mediaId, mediaTitle, mediaPoster)
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

const remove = async (req, res) => {
  const user_id = req.body.user_id;
  const mediaId = req.body.mediaId;
  const query = `
  DELETE FROM review 
  where user_id = ${user_id} and mediaId = ${mediaId}
  `;

  db.query(query, err => {
    if (err) {
      console.error('Error deleting review:', err);
    } else {
      console.log('Review deleted successfully');
    }
  });
};

const getReviewsOfUser = async (req, res) => {
  const user_id = req.body.user_id;
  const query = `
  select * FROM review 
  where user_id = ${user_id}
  `

  db.query(query, err => {
    if (err) {
      console.error('Error finding reviews of user:', err);
    } else {
      console.log('Found reviews from user');
    }
  });
};

export default { create, remove, getReviewsOfUser };