const passport = require('../config/passport')

// passport.authenticate('jwt', { session: false }, (err, user) => {
//     if (err || !user) return res.status(401).json({ status: 'error', message: 'unauthorized' })
//     next()
//   })  上述程式碼的結果為一個middleware的function，故後面要再帶入(req, res, next)，才會執行。
// const authenticated = (req, res, next) => {
//   const middleware = passport.authenticate('jwt', { session: false }, (err, user) => ...)
//   middleware(req, res, next)
// }
const authenticated = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err || !user) return res.status(401).json({ status: 'error', message: 'unauthorized' })

    // 依passport設計，如果在 authenticate 函式內有傳入callback，後續驗證成功的時候要自己放入 req.user 的資料！否則在後續操作 req.user 都會是 undefined。
    req.user = user
    next()
  })(req, res, next)
}

const authenticatedAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) return next()
  return res.status(403).json({ status: 'error', message: 'permission denied' })
}

module.exports = {
  authenticated,
  authenticatedAdmin
}
