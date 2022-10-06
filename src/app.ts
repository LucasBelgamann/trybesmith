import express from 'express';
import productsRoutes from './routes/productsRouter';
import usersRoutes from './routes/usersRouter';
import odersRoutes from './routes/ordersRoutes';
import loginRoutes from './routes/loginRoutes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', odersRoutes);
app.use('/login', loginRoutes);

export default app;
// ladys and gentlemans