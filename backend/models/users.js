const { Schema, model } = require('mongoose');

const usuarioSchema = Schema(
	{
		name: {
			type: String,
			required: true,
			unique: false,
		},
    
		username: {
			type: String,
			required: true,
			unique: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
		},

		password: {
			type: String,
			required: true,
		},

		rol: {
			type: String,
		},

    rol: {
			type: String,
		},
	},

	{ timestamps: true }
);

module.exports = model('usuario', usuarioSchema);
