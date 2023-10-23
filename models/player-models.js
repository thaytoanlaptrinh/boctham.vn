const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Định nghĩa schema cho dữ liệu
const playerSchema = new Schema({
    stt: Number,
    name: String,
    dv: String,
    listScore: [
        {
            dt: Number,
            kq: String,
            side: String,
        },
    ],
    myScore: Number,
    hsdk: Number,
    hsbg: Number,
    hsw: Number,
    hstb: Number,
    hsb: Number,
});

// Tạo model dựa trên schema
const Player = mongoose.model('Player', playerSchema);

module.exports = {
    Player,
};
