const mongoose = require('mongoose'); 

const createMarketSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        category: {
            type: String,
            required: true,
            trim: true
        },
        options: {
            type: [String],
            required: true,
            validate: [arrayLimit, "Phải có ít nhất 2 lựa chọn"]
        },
        endTime: {
            type: Date,
            required: true
        },
        validationSource: {
            type: String,
            required: true,
            trim: true
        },
        startingLiquidity: {
            type: Number,
            required: true,
            min: 0
        },
        creator: {
            type: String,
            ref: "User", // Liên kết với bảng User
            required: true
        },
        deleted: {
            type: Boolean,
            default: false
        },
        deletedAt: Date
    }, 
    {
        timestamps: true // Tự động tạo createdAt và updatedAt
    }
);

// Kiểm tra số lượng lựa chọn phải từ 2 trở lên
function arrayLimit(val) {
    return val.length >= 2;
}

const Market = mongoose.model("Market", createMarketSchema, "market");

module.exports = Market;
