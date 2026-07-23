import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  business: "Beth Frankos Freelance LLC",
  email: "info@bethfrankos.org",
  website: "https://bffreelance.org",
  bookingUrl: "https://bffreelance.org/book",
  paymentsUrl: "https://bffreelance.org/payments",
  websitesUrl: "https://bffreelance.org/websites",
  social: {
    instagram: "https://www.instagram.com/beth.frankos",
    facebook: "https://www.facebook.com/share/1AgkuwNfDa/",
  },
  inquiryForm: "https://docs.google.com/forms/d/e/1FAIpQLScbXZRCufQdGBA1cxb3vYpKw0mb56yFdb-6u1QwReb8RZwT2w/viewform",
};

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Returns email, booking URL, payments URL, and social links for Beth Frankos Freelance.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: contact,
  }),
});
