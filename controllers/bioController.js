const Bio = require('./../models/bioModel');

exports.getAllBios = async (req, res) => {
  try {
    const bio = await Bio.find();

    res.status(200).json({
      message: 'success',
      data: bio,
    });
  } catch (err) {
    res.status(404).json({
      message: 'fail',
      error: 'Not found',
    });
  }
};

exports.getBio = async (req, res) => {
  try {
    const bio = await Bio.findById(req.params.id);

    res.status(200).json({
      message: 'success',
      data: bio,
    });
  } catch (err) {
    res.status(404).json({
      message: 'fail',
      error: 'Not found',
    });
  }
};

exports.createBio = async (req, res) => {
  try {
    const bio = await Bio.create(req.body);

    res.status(201).json({
      message: 'success',
      data: bio,
    });
  } catch (err) {
    res.status(400).json({
      message: 'fail',
      error: err,
    });
  }
};

exports.updateBio = async (req, res) => {
  try {
    const bio = await Bio.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: 'success',
      data: bio,
    });
  } catch (err) {
    res.status(400).json({
      message: 'fail',
      error: err,
    });
  }
};

exports.deleteBio = async (req, res) => {
  try {
    await Bio.findByIdAndDelete(req.params.id);

    res.status(204).json({
      message: 'success',
    });
  } catch (err) {
    res.status(400).json({
      message: 'fail',
      error: err,
    });
  }
};
