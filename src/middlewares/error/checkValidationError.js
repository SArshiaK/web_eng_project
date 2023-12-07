const {validationResult} = require('express-validator')

const checkErrors =  (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    // in case request params meet the validation criteria
    return next()
  }
  res.status(422).json({errors: errors.array()})
};

module.exports = {checkErrors}