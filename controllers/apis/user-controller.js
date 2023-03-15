const jwt = require('jsonwebtoken')

const userController = {
  signIn: (req, res, next) => {
    try {
      // 此路油的passport功能設定為{ session: false }，故不會進入反序列化的程序，因此物件尚未被整理過。
      const userData = req.user.toJSON()
      delete userData.password

      const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '30d' })

      res.json({
        status: 'success',
        data: {
          token,
          user: userData
        }
      })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = userController