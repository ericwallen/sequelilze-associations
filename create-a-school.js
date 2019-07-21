var models = require('./models');

models.Schools.create({
	name: 'Yale'
}).then(() => {
	console.log('worked');
});