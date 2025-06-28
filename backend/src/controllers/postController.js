const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
}

exports.getPostById = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post',
    error });
    }
}

exports.createPost = async (req, res) => {
    const { title, description, tags } = req.body;
    try {
        const newPost = new Post({ title, description, tags });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
}

exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, description, tags } = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, { title, description, tags }, { new: true });
        if (!updatedPost) { 
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
}

exports.deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
}

exports.getPostByTitle = async (req, res) => {
    const { title } = req.query;
    try {
        const post = await Post.findOne({ title: new RegExp(title, 'i') });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post by title', error });
    }
}

exporsts.getTagsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;

        // Chỉ lấy trường 'tags' từ bài đăng
        const post = await Post.findById(postId, 'tags'); // <--- Chỉ định chỉ lấy trường 'tags'

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Trả về mảng tags của bài đăng đó
        res.status(200).json(post.tags);

    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({ message: 'Invalid Post ID format' });
        }
        console.error('Error fetching tags for post by ID:', error);
        res.status(500).json({ message: 'Error fetching tags for post', error: error.message });
    }
}