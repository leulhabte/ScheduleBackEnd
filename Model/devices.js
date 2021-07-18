const mongoose = require("mongoose");

const device = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    deviceName : {
        type : String,
        require : true
    }
})

const Device = mongoose.model('device',device)
exports.Device = Device