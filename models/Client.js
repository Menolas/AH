const mongoose = require('mongoose');
const avatarBasePath = 'uploads/avatars';

const ClientSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  avatar: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  contacts: {
    email: {
      type: String
    },
    insta: {
      type: String
    },
    phone: {
      type: String
    },
    whatsapp: {
      type: String
    },
    messenger: {
      type: String
    }
  },
  gallery: [{type: String}]
});

module.exports = mongoose.model('Client', ClientSchema);
module.exports.avatarBasePath = avatarBasePath;
