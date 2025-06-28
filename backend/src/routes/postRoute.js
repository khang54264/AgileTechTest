const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts); // Lấy tất cả bài viết
router.get('/:id', postController.getPostById); // Lấy bài viết theo ID
router.post('/', postController.createPost); // Tạo bài viết mới
router.put('/:id', postController.updatePost); // Cập nhật bài viết theo ID
router.delete('/:id', postController.deletePost); // Xóa bài viết theo ID
router.get('/search', postController.getPostByTitle); // Tìm bài viết theo tiêu đề
router.get('/:postId/tags', postController.getTagsByPostId); // Lấy tags của bài viết theo ID
