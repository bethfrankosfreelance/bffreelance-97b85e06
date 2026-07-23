import { defineTool } from "@lovable.dev/mcp-js";

const booking = {
  bookingPage: "https://bffreelance.org/book",
  calendly: "https://calendly.com/bethfrankosfreelance/15min",
  inquiryForm: "https://docs.google.com/forms/d/e/1FAIpQLScbXZRCufQdGBA1cxb3vYpKw0mb56yFdb-6u1QwReb8RZwT2w/viewform",
  description: "Free 15-minute strategy call. The booking page has a short intake form that pre-fills the calendar.",
};

export default defineTool({
  name: "get_booking_link",
  title: "Get booking link",
  description: "Returns the Calendly and intake form URLs for booking a free 15-minute strategy call.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(booking, null, 2) }],
    structuredContent: booking,
  }),
});
