const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmI5MTM2MzA3NGFjYTVhYWQwZGU3ZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MDA1NjA4M30.SyMnpePM6QPyGAcpmI-3nhyT7W33f5GzdvefgWitTYU"
  // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmI5ODE1ZmE2NjJmYmQ5OWQwNmU5NyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkwMDE2OTA2fQ.P7DrfFYuIhpD86ViMU6ZnLCZ2rMPhSHQiWV0OEcTP3g"
  return token;
};
