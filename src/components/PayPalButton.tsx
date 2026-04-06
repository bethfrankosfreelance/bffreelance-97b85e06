import { useEffect, useRef } from "react";

const PayPalButton = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;

    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=BAAXCXOTodrc7ddiFuQNsZWntSlI3dk1EktSMETLdimwRvktJuLdP3GLJuJwc-8jtfEmyFUeRem5oRz8bk&components=hosted-buttons&enable-funding=venmo&currency=USD";
    script.async = true;
    script.onload = () => {
      if (containerRef.current && (window as any).paypal && !renderedRef.current) {
        renderedRef.current = true;
        (window as any).paypal
          .HostedButtons({
            hostedButtonId: "KM3G5Q3DCAS3Y",
          })
          .render(containerRef.current);
      }
    };
    document.body.appendChild(script);

    return () => {};
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto">
      <div ref={containerRef} />
    </div>
  );
};

export default PayPalButton;
