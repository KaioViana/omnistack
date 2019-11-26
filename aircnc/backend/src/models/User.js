const mongoose = require('mongoose');
// Schema para usuários
const UserSchema = new mongoose.Schema({
	email: String,
});

module.exports = mongoose.model('User', UserSchema);

