const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

/**
 * @swagger
 * tags:
 * name: Users
 * description: Quản lý API người dùng
 */


/**
 * @swagger
 * /users:
 * get:
 * summary: Lấy danh sách tất cả người dùng
 * description: Trả về một mảng các đối tượng người dùng.
 * tags: [Users]
 * responses:
 * 200:
 * description: Danh sách người dùng được lấy thành công.
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/User'
 * 500:
 * description: Lỗi server nội bộ.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Error'
 */

router.get('/', userController.getAllUsers); // Lấy tất cả người dùng

/**
 * @swagger
 * /users/login:
 * post:
 * summary: Đăng nhập người dùng
 * description: Tìm và trả về thông tin người dùng dựa trên tên đăng nhập.
 * tags: [Users]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/LoginRequest'
 * responses:
 * 200:
 * description: Đăng nhập thành công.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/User'
 * 404:
 * description: Không tìm thấy người dùng.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Error'
 * 500:
 * description: Lỗi server nội bộ.
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Error'
 **/

router.post('/login', userController.loginUser); // Đăng nhập người dùng

module.exports = router;