// Imports
const express = require('express');
let cors = require('cors');
const stripe = require('stripe')('sk_test_51M91RhSALE1Xw58JdoQ48h9DAYPv6BTO31W6K0qAkcL1gJRYAVujAjmDEpuiY32xaYeL0frj8w6EQJX9iTjs1htg00XxQvOJrh');

// Setting the Port
const PORT = process.env.PORT || 5000;

// Initiating Express
const app = express();

// Set Middlewares
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

// Routes
app.post('/checkout', async (req, res) => {
    const items = req.body.items;
    let lineItems = [];

    // Constructing the item structure for Stripe
    items.forEach(item => {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        );
    });

    // Stripe Session
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    // Sending response to Frontend
    res.send(JSON.stringify({
        url: session.url
    }));
});

// Listening on a Port
app.listen(PORT, () => {
    console.log('Server running on Port 5000');
});