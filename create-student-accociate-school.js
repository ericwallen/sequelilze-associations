var models = require('./models');

models.Students.create({
	name: 'John',
	schoolID: 2,
}).then(() => {
	console.log('worked');
});