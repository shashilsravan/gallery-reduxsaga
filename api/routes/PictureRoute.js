const Picture = require('../models/Picture')
const express = require('express');
const router = express.Router()

// create post
router.post("/", async (req, res) => {
    const newPost = await new Picture(req.body);
    try {
        const post = await newPost.save()
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
})

// update post
router.put("/:id", async (req, res) => {
    try {
        const post = await Picture.findById(req.params.id)
        await post.updateOne({ $set: req.body })
        res.status(200).json("Updated successfully")
    } catch (error) {
        res.status(500).json("Error updating")
    }
})

// get all pictures
router.get("/", async (req, res) => {
    try {
        const posts = await Picture.find({})
        res.status(200).json(posts)
    } catch (error) {
        res.status(500).json("Some error occured")
    }
})

// delete post
router.delete("/:id", async (req, res) => {
    try {
        const post = await Picture.findById(req.params.id)
        await post.deleteOne()
        res.status(200).json("Deleted successfully")
    } catch (error) {
        res.status(500).json("Error occured")
    }
})

module.exports = router