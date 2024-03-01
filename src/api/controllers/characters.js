const CHARACTERS = require('../models/characters')

const getCharacters = async (req, res, next) => {
  try {
    const characters = await CHARACTERS.find()
    return res.json(characters)
  } catch (error) {
    return res.status(400).json('Error al hacer el get')
  }
}
const getCharactersById = async (req, res, next) => {
  try {
    const { id } = req.params
    const character = await CHARACTERS.findById(id)
    return res.json(character)
  } catch (error) {
    return res.status(400).json('Error al hacer el get por ID')
  }
}
const getCharactersByHouse = async (req, res, next) => {
  try {
    const { house } = req.params
    const characters = await CHARACTERS.find({ house })
    return res.json(characters)
  } catch (error) {
    return res.status(400).json('Error al hacer el get por casa')
  }
}
const getCharactersBySkill = async (req, res, next) => {
  try {
    const { skill } = req.params
    const characters = await CHARACTERS.find({ skill })
    return res.json(characters)
  } catch (error) {
    return res.status(400).json('Error al hacer el get por habilidad')
  }
}
const postCharacters = async (req, res, next) => {
  try {
    const newCharacter = new CHARACTERS(req.body)
    const character = await newCharacter.save()
    return res.status(201).json(character)
  } catch (error) {
    return res.status(400).json('Error al postear personaje')
  }
}
const putCharacters = async (req, res, next) => {
  try {
    const { id } = req.params
    const characterModify = new CHARACTERS(req.body)
    characterModify._id = id
    const characterUpdated = await CHARACTERS.findByIdAndUpdate(
      id,
      characterModify
    )
    return res.status(200).json(characterUpdated)
  } catch (error) {
    return res.status(400).json('Error al hacer el get')
  }
}
const deleteCharacters = async (req, res, next) => {
  try {
    const { id } = req.params
    const character = await CHARACTERS.findByIdAndDelete(id)
    return res.json(character)
  } catch (error) {
    return res.status(400).json('Error al eliminar el personaje')
  }
}

module.exports = {
  getCharacters,
  getCharactersById,
  getCharactersByHouse,
  getCharactersBySkill,
  postCharacters,
  putCharacters,
  deleteCharacters
}
