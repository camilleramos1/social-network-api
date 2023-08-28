const { User, Thought } = require('../models');

module.exports = {
    //  get all users
    getAllUser(req, res) {
        User.find({})
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
    },

    // get one user
    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            .then((user) => {
                if (!user) {
                    return res.status(404).json({ message: "User not found"})
                }
                res.json(user);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },

    // create a user
    createUser(req, res) {
        User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => {
            res.status(500).json(err);
        })
    },

    // update one user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true }
        ).then((user) => {
            if (!user) {
                return res.status(404).json({ message: "User not found"})
            }
            res.json(user);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
    },

    // delete a user
    deleteUser(req, res) {
        User.findByIdAndRemove(req.params.userId)
        .then((user) => {
            if (!user) {
                return res.status(404).json({ message: "User not found"})
            }

        // bonus to remove associated thoughts
        return Thought.deleteMany({ _id: { $in: user.thoughts } });
        }).then(() => {
            res.json({ message: "User and associated thoughts deleted!"});
        }).catch((err) => {
            res.status(500).json(err);
        });
    },
};