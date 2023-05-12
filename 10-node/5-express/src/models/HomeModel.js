const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    tituto: {
        type: String, 
        required: true
    },
    descricao: {
        type: String, 
        required: true
    }
});

const HomeModel = mongoose.model('Home', HomeSchema);
module.exports = HomeModel;