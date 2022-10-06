import express from 'express';
import productsRoutes from './routes/productsRouter';
import usersRoutes from './routes/usersRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

export default app;
// ladys and gentlemans