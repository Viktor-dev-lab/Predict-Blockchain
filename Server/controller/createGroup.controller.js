const Group = require('../models/group.model')

//const md5 = require('md5');

// prefix address
const systemConfig = require('../config/system.js');

// [POST] api/create-group
module.exports.postGroup = async (req, res) => {
  try {
    console.log('📩 Dữ liệu nhận từ frontend:', req.body);

    // Tạo một instance mới của Group với dữ liệu từ req.body
    const newGroup = new Group({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description,
      isPrivate: req.body.isPrivate,
      members: req.body.members,
      creator: "demo", 
    });

    // Lưu nhóm mới vào cơ sở dữ liệu
    const savedGroup = await newGroup.save();

    // Trả về phản hồi thành công với dữ liệu nhóm đã lưu
    res.status(201).json({
      message: 'Nhóm được tạo thành công',
      group: savedGroup,
    });
  } catch (error) {
    console.error('❌ Lỗi server:', error.message);
    res.status(500).json({ error: 'Lỗi server', details: error.message });
  }
};


// [GET] api/create-group
module.exports.getGroup = async (req, res) => {
  try {
    const group = await Group.find()
    res.json(group);
  } catch (error) {
    console.error('❌ Lỗi server:', error.message);
    res.status(500).json({ error: 'Lỗi server', details: error.message });
  }
};