const { generateSign } = require('../../config/jwt')
const User = require('../models/users')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const register = async (req, res, next) => {
  try {
    const newUser = new User({
      userName: req.body.userName,
      password: req.body.password,
      rol: 'user'
    })
    const duplicateUser = await User.findOne({ userName: req.body.userName })
    if (duplicateUser) {
      return res.status(400).json('Ya existe un usuario con ese nombre')
    }
    const userSaved = await newUser.save()
    return res.status(201).json(userSaved)
  } catch (error) {
    return res.status(400).json(error)
  }
}
const putUser = async (req, res, next) => {
  try {
    const userModify = new User(req.body)
    userModify._id = id
    const userUpdated = await User.findByIdAndUpdate(id, userModify)
    return res.status(200).json(userUpdated)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    return res.json(user)
  } catch (error) {
    return res.status(400).json(error)
  }
}

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ userName: req.body.userName })
    if (!user) {
      return res.status(404).json('Usuario no encontrado')
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = generateSign(user._id)
      return res.status(200).json({ user, token })
    } else {
      return res.status(400).json('contraseña erronea')
    }
  } catch (error) {
    return res.status(400).json(error)
  }
}

module.exports = { getUsers, register, deleteUser, putUser, login }
