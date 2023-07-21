const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Knex = require('knex');
const { Model } = require('objection');

const knexConfig = require('./knexfile');
const authRoutes = require('./src/routes/admin/authRoute');
const userRoutes = require('./src/routes/admin/userRoute');
const positionRoutes = require('./src/routes/admin/positionRoute');
const customerTypeRoutes = require('./src/routes/admin/customerTypeRoute');
const customerRoutes = require('./src/routes/admin/customerRoute');
const tableTypeRoutes = require('./src/routes/admin/tableTypeRoute');
const app = express();
const knex = Knex(knexConfig.development);

Model.knex(knex);

app.use(bodyParser.json());
app.use(cors());
app.use(authRoutes);
app.use(userRoutes);
app.use(positionRoutes);
app.use(customerTypeRoutes);
app.use(customerRoutes);
app.use(tableTypeRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});