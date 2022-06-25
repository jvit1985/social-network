const router= require('express').Router();
const { getAllThoughts,
        addThoughts,
        removeThoughts,
        addReaction,
        removeReaction,
        getOneThought,
        updateThoughts
    } = require('../../controllers/thoughts-controller');

//api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(addThoughts);

//api/thoughts/:id
router
    .route('/:thoughtsId')
    .get(getOneThought)
    .put(updateThoughts)
    .delete(removeThoughts);

//api/thoughts/:thoughtId/reactions
router.route('/:thoughtsId/reactions').post(addReaction);

//api/thoughts/:thoughtId/reactions
router.route('/:thoughtsId/reactions/reactionId').delete(removeReaction);