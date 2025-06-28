// backend/swaggerDef.js (hoặc backend/src/config/swaggerDef.js)

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Agile Tech Test API',
      version: '1.0.0',
      description: 'API TEST cho Agile Tech Test',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Test',
      },
    ],
    // Định nghĩa các schema (models) để có thể tham chiếu trong tài liệu
    components: {
      schemas: {
        User: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              description: 'Tên đăng nhập người dùng',
              example: 'john.doe'
            },
          },
          required: ['username'] // Ví dụ các trường bắt buộc khi tạo User
        },
        LoginRequest: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              description: 'Tên đăng nhập của người dùng',
              example: 'john.doe'
            }
          },
          required: ['username']
        },
        Error: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Thông báo lỗi'
            },
            error: {
              type: 'object',
              description: 'Chi tiết lỗi (tùy chọn)'
            }
          }
        }
      }
    }
  },
  // Đường dẫn đến các file chứa chú thích JSDoc
  apis: [
    './src/routes/*.js',   // Quét các file route
    // Nếu bạn muốn đặt chú thích ngay trong controller, hãy thêm đường dẫn tới controller files
    // './src/controllers/*.js',
    './src/app.js'         // Nếu bạn có route trực tiếp trong app.js
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;