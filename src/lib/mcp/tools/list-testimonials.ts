import { defineTool } from "@lovable.dev/mcp-js";

const testimonials = [
  {
    author: "Julius Miller",
    role: "Contractor",
    quote: "Beth is so efficient, I can't believe how much she was able to help our team get done in just a few weeks.",
  },
  {
    author: "Margot Smith",
    role: "CPA",
    quote: "When I initially contacted Beth my team was on edge and our processes were a mess. She helped us get back on track quickly and with no judgment. I highly recommend working with her.",
  },
  {
    author: "Renequa Jones",
    role: "Non-profit leader",
    quote: "Beth got my non-profit 501c3 status in less than 2 weeks and curated prospect lists for grant opportunities. I was shocked we got it that fast, but she made everything simple and easy.",
  },
];

export default defineTool({
  name: "list_testimonials",
  title: "List client testimonials",
  description: "Returns published client testimonials for Beth Frankos Freelance.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(testimonials, null, 2) }],
    structuredContent: { testimonials },
  }),
});
