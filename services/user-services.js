const bcrypt = require('bcryptjs')
const db = require('../models')
const { User } = db

const userController = {
  signUp: (req, cb) => {
    if (req.body.password !== req.body.passwordCheck) throw new Error('Passwords do not match!')

    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) throw new Error('Email already exists!')

        return bcrypt.hash(req.body.password, 10)
      })
      .then(hash => User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash
      }))
      .then(user => cb(null, { user }))
      .catch(err => cb(err)) // 接住前面拋出的錯誤，呼叫 Express 內建的 Error Handler，或自己客製化錯誤處理的 middleware。
  }
}

module.exports = userController
