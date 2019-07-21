// var models = require('./models');

models.Schools.create({
	name: 'Harvard'
}).then(school => {
	school.createStudent({
		name: 'Sarah'
	}).then('worked')
})