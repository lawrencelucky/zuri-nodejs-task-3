const express = require('express');

const bioController = require('./../controllers/bioController');

const router = express.Router();

router.route('/').get(bioController.getAllBios).post(bioController.createBio);

router
  .route('/:id')
  .get(bioController.getBio)
  .patch(bioController.updateBio)
  .delete(bioController.deleteBio);

module.exports = router;
