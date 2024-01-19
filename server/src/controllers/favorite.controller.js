import db from "../../index"

const addFavorite = async (user_id, content, mediaType, mediaId, mediaTitle, mediaPoster) => {
  const user_id = req.body.user_id;
  const mediaId = req.body.mediaId;
  const mediaRate = req.body.mediaRate;
  const mediaType = req.body.mediaType;
  const mediaPoster = req.body.mediaPoster;
  const mediaTitle = req.body.mediaTitle;
  const query = `
    INSERT INTO favorite
    (user_id, mediaType, mediaId, mediaTitle, mediaPoster, mediaRate)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  
  db.query(query, [user_id, mediaType, mediaId, mediaTitle, mediaPoster, mediaRate], (err, results) => {
    if (err) {
      console.error('Error adding favorite:', err);
    } else {
      console.log('Favorite added successfully');
    }
  });
};

const removeFavorite = async (req, res) => {
  const user_id = req.body.user_id;
  const mediaId = req.body.mediaId;
  const query = `
  DELETE FROM favorite 
  where user_id = ${user_id} and mediaId = ${mediaId}
  `;

  db.query(query, err => {
    if (err) {
      console.error('Error deleting favorite:', err);
    } else {
      console.log('Favorite deleted successfully');
    }
  });
};

const getFavoritesOfUser = async (req, res) => {
  const user_id = req.body.user_id;
  const query = `
  select * FROM favorite 
  where user_id = ${user_id}
  `

  db.query(query, err => {
    if (err) {
      console.error('Error finding favorites of user:', err);
    } else {
      console.log('Found favorites from user');
    }
  });
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };