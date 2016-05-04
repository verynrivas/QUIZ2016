var models = require('../models');

//GET /quizzes
exports.index = function(req, res, next) {
	models.Quiz.findAll().then(function(quizzes) {
		res.render('quizzes/index.js', {quizzes: quizzes});
	}).catch(function(error) {next(error);});
}:

//Get /quizzes/:id
exports.show = function(req, res, next) {
	models.Quiz.findById(req.params.quizId).then(function(quiz) {
		if (quiz) {
			var answer = req.query.answer || '';
			res.render('quizzes/show', { quiz:quiz, answer: answer});
		} else { throw new Error('/NO existe ese quiz en la BBDD.');}
	}).catch(function(error) { next(error;)});
};

//Get //quizzes/:id/check
exports.check = function(req, res) {
	models.Quiz.findById(req.params.quizId).then(function(quiz) {
		if (quiz) {
			var answer = req.query.answer || '';
			var result = answer === quiz.answer ? 'Correcta' : 'Incorrecta';
			res.render('quizzes/result', { quiz: quiz, result: result, answer: answer});

		} else { throw new Error('No existe ese quiz en la BBDD.');}
	}).catch(function(error) {next(error);});
};

//Get /question
/*exports.question = function (req, res, next) {
	models.Quiz.findOne().then(function(quiz) {
		if (quiz) {
			var answer = req.query.answer || '';
			res.render('quizzes/question', {question: quiz.question, answer: answer});
		}
		else {
			throw new Error('No hay preguntas en la BBDD.');
		}
	}).catch(function(error) { next(error);});	
};

//GET /check
exports.check = function(req,res, next) {
	models.Quiz.findOne().then(function(quiz) {
		if (quiz) {
			var answer = req.query.answer || '';
			var result = ((answer === quiz.answer) ? 'Correcta' : 'Incorrecta');
			res.render('quizzes/result', {result: result, answer: answer});
		}
		else {
			throw new Error('No hay preguntas en la BBDD.');
		}
	}).catch(function(error) { next(error);});
	
};*/

//GET /author
exports.author = function(req, res, next) {
	res.render('author');
};