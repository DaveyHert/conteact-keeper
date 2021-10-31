const express = require("express");
const router = express.Router();

// @route    GET api/contacts
// @desc     Get all user's contact
// @access   private
router.get("/", (req, res) => res.send("Get all user's contacts"));

// @route    POST api/contacts
// @desc     Add new contact
// @access   private
router.post("/", (req, res) => res.send("Add new contact"));

// @route    PUT api/contacts:id
// @desc     Edit a contact
// @access   private
router.put("/:id", (req, res) => res.send("Edit contact"));

// @route    DELETE api/contacts/:id
// @desc     Delete a contact
// @access   private
router.delete("/:id", (req, res) => res.send("Delete contact"));

module.exports = router;
