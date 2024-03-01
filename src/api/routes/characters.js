const { isAuth, isAdmin } = require('../../middlewares/auth')
const {
  getCharacters,
  getCharactersById,
  getCharactersByHouse,
  getCharactersBySkill,
  postCharacters,
  putCharacters,
  deleteCharacters
} = require('../controllers/characters')

const charactersRouter = require('express').Router()

charactersRouter.get('/', getCharacters)
charactersRouter.get('/:id', getCharactersById)
charactersRouter.get('/house/:house', getCharactersByHouse)
charactersRouter.get('/skills/:skills', getCharactersBySkill)
charactersRouter.post('/', [isAuth], postCharacters)
charactersRouter.put('/:id', [isAuth], putCharacters)
charactersRouter.delete('/:id', [isAdmin], deleteCharacters)

module.exports = { charactersRouter }
