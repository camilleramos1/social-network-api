const { Schema, Types, model } = require('mongoose');
const { format } = require('date-fns');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function() {
                return format(this.createdAt, "MMMM do, yyyy 'at' hh:mm a")
            },
        },
    },
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

thoughtSchema.pre('save',  function(next) {
    if (!this.isNew) {
        return next();
    }
    this.createdAt = format(this.createdAt, "MMMM do, yyyy 'at' hh:mm a");
    next();
});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;