const {query} = require('../db/db');

module.exports = {
  getAllProjects: function (req, res, next) {
    console.log('entered into getAllProjects');
    const queryString = 'select * from projects';
    query(queryString, null, (err, results) => {
      if (err) {
        console.error('there was in issue getting all projects: ', err);
        return res.status(500).json({'error': 'there was an error making that query'});
      }
      else res.locals.projects = results.rows;
      return next();
    })
  }
}