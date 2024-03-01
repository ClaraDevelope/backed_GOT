const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    house: { type: String, required: true },
    skill: { type: String, required: true },
    seasons: { type: [Number] },
    image: { type: String, required: true }
  },
  {
    collection: 'Games Of Thrones',
    timestamps: true
  }
)

const CHARACTERS = mongoose.model(
  'characters',
  characterSchema,
  'Game of Thrones'
)
module.exports = CHARACTERS
