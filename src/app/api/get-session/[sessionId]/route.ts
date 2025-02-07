import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-01-27.acacia",
});

export async function GET(req: Request, { params }: { params: { sessionId: string } }) {
  const { sessionId } = params;

  try {
    // Retrieve the session from Stripe
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    return new Response(JSON.stringify(session), {
      status: 200,
    });
  } catch (error) {
    console.error("Error retrieving session:", error);
    return new Response(
      JSON.stringify({ error: "Unable to fetch session data" }),
      { status: 500 }
    );
  }
}
