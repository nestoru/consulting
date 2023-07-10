exports.validateTask = (req, res, next) => {
  const { title, description, completed } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  // Additional validation logic if needed

  next();
};

