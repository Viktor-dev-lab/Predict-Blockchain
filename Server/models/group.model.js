const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: String,
      ref: 'User',
      required: true,
    },
    members: [
      {
        type: String,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true, // Tự động tạo createdAt và updatedAt
  }
);

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
