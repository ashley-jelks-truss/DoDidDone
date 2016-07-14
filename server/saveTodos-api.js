module.exports = function(apiRoutes) {

apiRoutes.post('/save', function (request, response) {
    return User.findById('email').populate('todo').exec(function(err, client) {
    if (err) {
      console.log(err);
    }
    return client
    // Return the information including token as JSON
    response.json({
      success: true,
      todo: todo,
      email: user.email
    });
  }
