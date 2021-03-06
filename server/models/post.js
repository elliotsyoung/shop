var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PostSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	image: {type: String, required: true},
	links: [{type: String}]
	// links: [{type: Schema.Types.ObjectId, ref: 'Link'}]
}, {timestamps: true});
mongoose.model('Post', PostSchema);