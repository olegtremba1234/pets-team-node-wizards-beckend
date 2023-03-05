const { petsService } = require("../../services");
const { currentPet } = require("../../services/petsService");

const createPet = async (req, res) => {
  const newPet = await petsService.addPet(req.body, req.user._id);
  res.status(201).json(newPet);
};

const removePet = async (req, res) => {
  const { id } = req.params;
  const result = await petsService.removePetById(id, req.user._id);
  res.status(200).json(result);
};

const currentPetController = async (req, res) => {
  const { _id: userId } = req.user;

  const userWithPets = await currentPet(userId);

  res.status(200).json(userWithPets);
};

module.exports = {
  createPet,
  removePet,
  currentPetController,
};
