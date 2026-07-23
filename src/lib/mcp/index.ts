import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import getContactInfo from "./tools/get-contact-info";
import listTestimonials from "./tools/list-testimonials";
import getBookingLink from "./tools/get-booking-link";

export default defineMcp({
  name: "bffreelance-mcp",
  title: "Beth Frankos Freelance MCP",
  version: "0.1.0",
  instructions:
    "Public tools for Beth Frankos Freelance LLC. Use `list_services` for tiers and pricing, `get_contact_info` for email and social links, `list_testimonials` for client quotes, and `get_booking_link` for the free strategy call URL.",
  tools: [listServices, getContactInfo, listTestimonials, getBookingLink],
});
