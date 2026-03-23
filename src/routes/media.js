const express = require("express");
const router = express.Router();

const {
  getMedias,
  getMediaById,
  postMedia,
  putMedia,
  deleteMedia,
} = require("../controllers/mediaController");

router.get("/", getMedias);
router.get("/:id", getMediaById);
router.post("/", postMedia);
router.put("/:id", putMedia);
router.delete("/:id", deleteMedia);

module.exports = router;