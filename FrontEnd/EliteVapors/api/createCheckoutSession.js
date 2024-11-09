// api/createCheckoutSession.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { cartItems } = req.body;
    
    if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: 'Invalid cart items' });
    }

    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          ...(item.image && { images: [item.image] }),
        },
        unit_amount: Math.round(parseFloat(item.price) * 100),
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.VERCEL_URL || req.headers.origin}/success`,
      cancel_url: `${process.env.VERCEL_URL || req.headers.origin}/cancel`,
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe session creation error:', error);
    return res.status(500).json({ 
      error: 'Error creating checkout session',
      details: error.message 
    });
  }
}