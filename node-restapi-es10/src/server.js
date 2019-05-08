import express from 'express'

const app=express();
//Settings
app.set('port', process.env.PORT||3000);
//Routes
import IndexRoutes from './Routes/index.routes';
app.use(IndexRoutes);
export default app;