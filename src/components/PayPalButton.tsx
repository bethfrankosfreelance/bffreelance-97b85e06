import { useEffect, useRef } from "react";

const PayPalButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=test&buyer-country=US&currency=USD&components=buttons&enable-funding=card&disable-funding=venmo,paylater";
    script.setAttribute("data-sdk-integration-source", "developer-studio");
    script.async = true;
    script.onload = () => {
      if (containerRef.current && (window as any).paypal && !renderedRef.current) {
        renderedRef.current = true;
        (window as any).paypal
          .Buttons({
            style: {
              shape: "rect",
              layout: "vertical",
              color: "gold",
              label: "paypal",
            },
            async createOrder() {
              try {
                const response = await fetch("/api/orders", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    cart: [{ id: "service", quantity: 1 }],
                  }),
                });
                const orderData = await response.json();
                if (orderData.id) return orderData.id;
                throw new Error(JSON.stringify(orderData));
              } catch (error) {
                console.error(error);
              }
            },
            async onApprove(data: any) {
              try {
                const response = await fetch(
                  `/api/orders/${data.orderID}/capture`,
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                  }
                );
                const orderData = await response.json();
                const msg = document.getElementById("result-message");
                if (msg) {
                  const status = orderData?.status;
                  if (status === "COMPLETED") {
                    msg.textContent = "Payment successful! Thank you.";
                  } else {
                    msg.textContent = `Payment status: ${status}`;
                  }
                }
              } catch (error) {
                console.error(error);
              }
            },
          })
          .render(containerRef.current);
      }
    };
    document.body.appendChild(script);

    return () => {
      // cleanup handled by React unmount
    };
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <p className="text-sm font-body tracking-[0.2em] uppercase text-primary-foreground/60 mb-4 text-center">
        Make a Payment
      </p>
      <div ref={containerRef} />
      <p id="result-message" className="text-sm font-body text-primary-foreground/70 text-center mt-3" />
    </div>
  );
};

export default PayPalButton;
