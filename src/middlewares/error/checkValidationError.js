const {validationResult} = require('express-validator')

const checkErrors =  (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    // in case request params meet the validation criteria
    return next()
  }
  const errs = errors.array()
  res.status(422).json({
    success: false,
    message: errs[0].msg,
    path:  errs[0].path,
    location:  errs[0].location
  })
  // res.status(422).json({errors: errors.array()})
};

module.exports = {checkErrors}