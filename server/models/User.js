const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: {
      createdAt: 'created_at'
    },
  }
)

const User = mongoose.model('Users', userSchema);
module.exports = User;
