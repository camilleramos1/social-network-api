const router = require('express').Router();

const {
    getAllUser,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require('../../controllers/userController');

// GET and POST route for /api/users 
router.route('/').get(getAllUser).post(createUser);

// GET, PUT, and DELETE routes for /api/user/:userId
router.route('/:userId')
.get(getOneUser)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(deleteFriend);

module.exports = router;