const { isAdmin } = require('../../middlewares/auth')
const {
  getUsers,
  register,
  deleteUser,
  login,
  putUser
} = require('../controllers/users')
const usersRouter = require('express').Router()

usersRouter.get('/', getUsers)
usersRouter.post('/register', register)
usersRouter.put('/:id', putUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.post('/login', login)

module.exports = { usersRouter }
