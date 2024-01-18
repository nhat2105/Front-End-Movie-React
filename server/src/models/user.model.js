const crypto = require("crypto");
import db from "../../index"

const setPassword = (password, salt) => {
  return crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
};

const validPassword = (password, salt, hashedPassword) => {
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return hashedPassword === hash;
};

const createUser = async (username, displayName, password) => {
  const salt = crypto.randomBytes(16).toString("hex");
  const hashedPassword = setPassword(password, salt);

  await db.query(
    "INSERT INTO user (username, displayName, password, salt) VALUES (?, ?, ?, ?)",
    [username, displayName, hashedPassword, salt]
  );
};

const getUserByUsername = async (db, username) => {
  const [user] = await db.query("SELECT * FROM user WHERE username = ?", [username]);
  return user[0];
};

const userModel = {
  createUser,
  getUserByUsername,
  validPassword,
};

module.exports = userModel;
