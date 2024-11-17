const { MongoClient } = require('mongodb');

module.exports = async (req, res) => {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db('E-Commerce');
    const collection = db.collection('Products');
    const products = await collection.find({}).toArray();

    res.status(200).json(products.map(({ name, price, category, description, image }) => ({
      name,
      price,
      category,
      description,
      image
    })));

    await client.close();
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};