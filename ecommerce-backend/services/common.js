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
  token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmI5MTM2MzA3NGFjYTVhYWQwZGU3ZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY5MDAxNTY0M30.L00iPLctX3O_fucfXrivRP-jYFWk6Z6haTzH2LJTI6U"
  return token;
};
