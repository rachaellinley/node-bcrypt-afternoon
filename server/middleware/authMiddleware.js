module.exports = {
    usersOnly: (req, res, next) => {
        //connects to an endpoint that requires the user is logged in 
      if (!req.session.user) {
        return res.status(401).send('Please log in');
      }
      next();
    },

    adminsOnly: (req, res, next) => {
      if (!req.session.user.isAdmin) {
        return res.status(403).send('You must be authorized');
      }
      next();
    }
  };