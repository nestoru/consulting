const express = require('express');
const mongoose = require('mongoose');
const app = express();
const swaggerSetup = require('./modules/tasks/swagger');
const fs = require('fs');
const path = require('path');

// MongoDB connection setup
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });

// Swagger setup
swaggerSetup(app);

// Parse JSON request bodies
app.use(express.json());

// Load routes from all modules
const modulesDir = path.join(__dirname, 'modules');
const moduleNames = fs.readdirSync(modulesDir);

moduleNames.forEach((moduleName) => {
  const modulePath = path.join(modulesDir, moduleName);
  const routesPath = path.join(modulePath, 'routes', 'index.js');
  if (fs.existsSync(routesPath)) {
    const routes = require(routesPath);
    app.use(`/${moduleName}`, routes);
  }
});

// Server setup
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
