const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./config/swagger.json'); 

//Import Routes
const userRoutes = require('./routes/userRoute.js');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:3000', 'http://localhost:8081', 'http://localhost:8082']; // CORS allowed origins
// Middleware
app.use(cors({
  origin: allowedOrigins, //Kết nối tới frontend
  methods: ['GET','POST','PUT','DELETE','OPTIONS'], //Các phương thức HTTP được phép
  credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json());
// app.use('/swaggers', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Use Routes
app.use('/users', userRoutes); // Đường dẫn cho người dùng

// Kết nối MongoDB (đảm bảo đã kết nối)
mongoose.connect('mongodb://localhost:27017/AgileTechTest')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the backend API!');
});

app.get('/users', (req, res) => {
  res.json([{ id: '1', name: 'Test User' }]);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    // console.log(`Swagger UI available at http://localhost:${PORT}/swaggers`);
});