import express from 'express';
import payload from 'payload';

require('dotenv').config();
const app = express();

const {MONGODB_URI, PAYLOAD_SECRET, PORT} = process.env

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: PAYLOAD_SECRET,
  mongoURL: MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
})

// Add your own express routes here

app.listen(PORT || 3000);
