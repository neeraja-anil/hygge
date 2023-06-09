import express from 'express'
import { protect } from '../middlewares/authMiddleware.js'
import { createNewPost, getPostById, deletePost, getAllPosts, likePost, commentPost, getUserPosts } from '../controllers/postController.js'
import { upload } from '../utils/multer.js'

const router = express.Router()

router.route('/create').post(protect, upload.single('post'), createNewPost)
router.route('/:id').get(protect, getPostById).delete(protect, deletePost)
router.route('/:id/like').put(protect, likePost)
router.route('/:id/comment').put(protect, commentPost)
router.route('/').get(protect, getAllPosts)
router.route('/user/:id').get(protect, getUserPosts)



export default router