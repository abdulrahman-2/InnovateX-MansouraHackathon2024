import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const { items } = reqBody;

    // Validate if items are present
    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    // Map over items and calculate price with discount
    const updatedItems = items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: item.title,
          description: item.description,
          images: item.images,
        },
      },
    }));

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: updatedItems,
      mode: "payment",
      success_url: `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_URL}/checkout`,
    });

    // Return session ID
    return NextResponse.json({
      message: "Checkout session created successfully",
      success: true,
      id: session.id,
    });
  } catch (error) {
    // Log the error to track issues
    console.error("Stripe Checkout Error:", error);

    // Return error response with status 500
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
