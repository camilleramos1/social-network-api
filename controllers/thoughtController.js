const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getAllThought(req, res) {
        Thought.find({})
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    // get one thought
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thought) => {
            if (!thought) {
                return res.status(404).json({ message: "Thought not found" })
            }
            res.json(thought);
        })
        .catch((err) => res.status(500).json(err));
    },

    // create a thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                { _id: thought.username },
                { $push: {thoughts: thought._id } },
                { new: true }
            );
        }).then(() => res.json({ message: "Thought created!" }))
        .catch((err) => res.status(500).json(err));
    },

    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        )
        .then((thought) => {
            if (!thought) {
                return res.status(404).json({ message: "Thought not found" })
            }
            res.json(thought);
        })
        .catch((err) => res.status(500).json(err));
    },

    // delete a thought
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) => {
            if (!thought) {
                return res.status(404).json({ message: "Thought not found" })
            }

            return User.findOneAndUpdate(
                { _id: thought.userId },
                { $pull: { thoughts: thought._id } }
            );
        })
        .then(() => res.json({ message: "Thought deleted"}))
    },

    // create a reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { new: true }
        )
        .then((thought) => {
            if (!thought) {
                return res.status(404).json({ message: "Thought not found"})
            }
        res.json(thought);
        })
        .catch((err) => res.status(500).json(err));
    },
    // delete a reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.params.reactionId } } },
            { new: true }
        )
        .then((thought) => {
            if (!thought) {
                return res.status(404).json({ message: "Thought not found" })
            }
            res.json(thought);
        })
        .catch((err) => res.status(500).json(err));
    },
};