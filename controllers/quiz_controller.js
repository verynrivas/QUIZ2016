//Get /question

export.question = function (req, res, next) {
	res.render('quizzes/question', {question: "Capital de Itaia"});

};

//GET /check
export.check = function(req,res, next) {
	var result = req.query.answer === 'Roma' ? 'Correcta' : 'Incorrecta';
	res.render('quizzes/result', {result: result});
};