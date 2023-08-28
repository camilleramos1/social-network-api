const router = require('express').Router();
const {
    getAllThought,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// GET and POST route for /api/thoughts
router.route('/').get(getAllThought).post(createThought);

// GET, PUT, and DELETE routes for /api/thoughts/:thoughtId 
router.route('/:thoughtId')
.get(getOneThought)
.put(updateThought)
.delete(deleteThought);

// POST route for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// DELETE route for /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;