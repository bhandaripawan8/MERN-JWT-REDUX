import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) =>{
    res.send('server is ready');
})

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>{console.log(`server started on ${port}`)})


// routes that is being created
// post /api/users - registering the user
// post /api/users/auth - authenticate a user and get token
// post /api/users/logout - logout user and clear cookie
// get /api/users/profile - get user profile
// put /api/users/profile - update profile