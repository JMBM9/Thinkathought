const express = require('express');
const mongoose = require('mongoose');
//server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));
//mongoose database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network-API', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// logging mongo queries
mongoose.set('debug', true);


app.listen(PORT, () => console.log(` Connected to localhost:${PORT}`));