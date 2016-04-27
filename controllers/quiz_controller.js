//Get /question

exports.question = function (req, res, next) {
	var answer = req.query.answer || '';
	res.render('quizzes/question', {question: "Capital de Italia", answer: answer});

};

//GET /check
exports.check = function(req,res, next) {
	var result = req.query.answer === 'Roma' ? 'Correcta' : 'Incorrecta';
	res.render('quizzes/result', {result: result, answer: answer});
};