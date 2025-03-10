import express from 'express';
import resourceRoutes from './routes/resourceRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/resources', resourceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});