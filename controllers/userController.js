


const user = await User.findOneAndUpdate(
    { _id: req.body.userId },
    { $addToSet: { friends: req.params.id } },
    { new: true }
  );