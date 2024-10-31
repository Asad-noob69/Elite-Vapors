// server.js or create-checkout-session.js

const express = require('express');
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Secret key from environment variables

// Make sure to parse JSON bodies
app.use(express.json());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Your Product Name' },
            unit_amount: 2000, // Amount in cents ($20)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success.html`,
      cancel_url: `${req.headers.origin}/cancel.html`,
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Only if this is your main server file
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
