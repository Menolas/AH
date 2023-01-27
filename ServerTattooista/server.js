require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 3030;

const customerRouter = require('./routes/CustomerRoutes');
const clientRouter = require('./routes/ClientRoutes');
const authRouter = require('./routes/AuthRoutes');
const galleryRouter = require('./routes/GalleryRoutes');
const categoryRouter = require('./routes/CategoryRoutes');
const faqRouter = require('./routes/FaqRoutes');
const serviceRouter = require('./routes/ServiceRoutes');

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));

app.use('/customers', customerRouter);
app.use('/clients', clientRouter);
app.use('/auth', authRouter);
app.use('/gallery', galleryRouter);
app.use('/category', categoryRouter);
app.use('/faq', faqRouter);
app.use('/services/', serviceRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    const db = mongoose.connection;
    db.on('error', (error) => console.error(error));
    db.once('open', () => console.log('Connected to Database'));
    app.listen(PORT, () => console.log('Server started!'));
  } catch (e) {
    console.log(e);
  }
}

start();


