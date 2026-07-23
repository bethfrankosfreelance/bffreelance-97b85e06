import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  { category: "Operations", tier: "Operations Audit", price: "$1,050", summary: "One-time deep audit of workflows, tools, and bottlenecks with a prioritized action plan." },
  { category: "Operations", tier: "Systems and Workflow Sprint", price: "$3,900", summary: "2–4 week sprint to design and implement streamlined systems and SOPs." },
  { category: "Operations", tier: "Ongoing Strategic Support (Retainer)", price: "$2,000 base + $780/wk", summary: "Fractional operations partner: weekly execution, strategy, and accountability." },
  { category: "Websites", tier: "Starter Site", price: "$750", summary: "Clean, professional single-page website." },
  { category: "Websites", tier: "Growth Site", price: "$1,500", summary: "Multi-page site with lead capture and content strategy." },
  { category: "Websites", tier: "Managed Webmaster Plan", price: "$625/mo", summary: "Ongoing site management. *Available exclusively for existing and prior website customers." },
  { category: "À la Carte", tier: "Monthly Retainer (A la Carte)", price: "$2,340/mo", summary: "Flexible monthly hours across ops, admin, and project tasks." },
];

export default defineTool({
  name: "list_services",
  title: "List services and pricing",
  description: "Returns Beth Frankos Freelance service tiers, website packages, and à la carte pricing.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(services, null, 2) }],
    structuredContent: { services },
  }),
});
