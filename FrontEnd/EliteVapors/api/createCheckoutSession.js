// /api/createCheckoutSession.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { cartItems } = req.body;

    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: 'Invalid cart items' });
    }

    // Create line items with proper URL handling
    const line_items = cartItems.map(item => {
      const productData = {
        name: item.name,
      };

      // Only add images if the URL is absolute
      if (item.image && (item.image.startsWith('http://') || item.image.startsWith('https://'))) {
        productData.images = [item.image];
      }

      return {
        price_data: {
          currency: 'usd',
          product_data: productData,
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity || 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.VITE_APP_URL}/success.html`,
      cancel_url: `${process.env.VITE_APP_URL}/cancel.html`,
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return res.status(500).json({ 
      error: 'Error creating checkout session',
      details: error.message 
    });
  }
}