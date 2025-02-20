const Market = require('../models/market.model')

//const md5 = require('md5');

// prefix address
const systemConfig = require('../config/system.js');

// [POST] /api/create-market
module.exports.postMarket = async (req, res) => {
  try {
    console.log("📩 Dữ liệu nhận từ frontend:", req.body);

    if (!req.body || Object.keys(req.body).length === 0) {
      throw new Error("Dữ liệu không hợp lệ!");
    }

    // 🛠 Chuyển đổi kiểu dữ liệu phù hợp
    const name = String(req.body.name).trim(); // Chuyển thành chuỗi
    const description = String(req.body.description).trim(); // Chuỗi
    const category = String(req.body.category).trim(); // Chuỗi
    const options = Array.isArray(req.body.options) ? req.body.options.map(opt => String(opt).trim()) : []; // Mảng chuỗi
    const endTime = new Date(req.body.endTime); // Chuyển thành kiểu Date
    const validationSource = String(req.body.validationSource).trim(); // Chuỗi
    const startingLiquidity = parseFloat(req.body.startingLiquidity); // Chuyển thành số thực (float)
    const creator = "213212213212";

    // Kiểm tra dữ liệu đã chuyển đổi có hợp lệ không
    if (!name || !description || !category || options.length < 2 || isNaN(endTime.getTime()) || !validationSource || isNaN(startingLiquidity)) {
      throw new Error("Thiếu hoặc sai định dạng dữ liệu!");
    }

    // 🛠 Tạo một instance của Market và lưu vào MongoDB
    const market = new Market({
      name,
      description,
      category,
      options,
      endTime,
      validationSource,
      startingLiquidity,
      creator
    });

    await market.save(); // Lưu vào database

    // Gửi phản hồi với dữ liệu đã được định dạng
    res.json({
      message: "✅ Dữ liệu hợp lệ!",
      received: { name, description, category, options, endTime, validationSource, startingLiquidity }
    });

  } catch (error) {
    console.error("❌ Lỗi server:", error.message);
    res.status(500).json({ error: "Lỗi server", details: error.message });
  }
};


// [GET] /api/create-market
module.exports.getMarket = async (req, res) => {
  try {
    const dataMarket = await Market.find();
    console.log(dataMarket);

    res.json(dataMarket);
  }
  catch(err){

  }
}