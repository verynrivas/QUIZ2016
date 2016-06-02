var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var commentController = require('../controllers/comment_controller');
var userController = require('../controllers/user_controller');
var sessionController = require('../controllers/session_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/author', function(req, res, next) {
  res.render('author');
});

// Autoload de rutas que usen :quizId (parametros)
router.param('quizId', quizController.load);  // autoload :quizId
router.param('userId', userController.load); // autoload :userId

// Definición de rutas de sesion
router.get('/session',    sessionController.new);     // formulario login
router.post('/session',   sessionController.create);  // crear sesión
router.delete('/session', sessionController.destroy); // destruir sesión

// Definición de rutas de cuenta
router.get('/users',                    userController.index);   // listado usuarios
router.get('/users/:userId(\\d+)',      userController.show);    // ver un usuario
router.get('/users/new',                userController.new);     // formulario sign un
router.post('/users',                   userController.create);  // registrar usuario
//router.get('/users/:userId(\\d+)/edit', userController.edit);    // editar información de cuenta
//router.put('/users/:userId(\\d+)',      userController.update);  // actualizar información de cuenta
//router.delete('/users/:userId(\\d+)',   userController.destroy); // borrar cuenta
router.get('/users/:userId(\\d+)/edit', sessionController.loginRequired, userController.edit);     
router.put('/users/:userId(\\d+)',      sessionController.loginRequired, userController.update);  
router.delete('/users/:userId(\\d+)',   sessionController.loginRequired, userController.destroy);  

// Definición de rutas de /quizzes
router.get('/quizzes.:format?',              quizController.index);
router.get('/quizzes/:quizId(\\d+).:format?',quizController.show);
router.get('/quizzes/:quizId(\\d+)/check',   quizController.check);
/*router.get('/quizzes/new',                   quizController.new);
router.post('/quizzes',                      quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',    quizController.edit);
router.put('/quizzes/:quizId(\\d+)',         quizController.update);
router.delete('/quizzes/:quizId(\\d+)',      quizController.destroy);
router.get('/quizzes/:quizId(\\d+)/comments/new',  commentController.new);
router.post('/quizzes/:quizId(\\d+)/comments',     commentController.create);
*/
router.get('/quizzes/new',                 sessionController.loginRequired, quizController.new);
router.post('/quizzes',                    sessionController.loginRequired, quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  sessionController.loginRequired, quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       sessionController.loginRequired, quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    sessionController.loginRequired, quizController.destroy);
router.get('/quizzes/:quizId(\\d+)/comments/new',  sessionController.loginRequired, commentController.new);
router.post('/quizzes/:quizId(\\d+)/comments',     sessionController.loginRequired, commentController.create);
module.exports = router;