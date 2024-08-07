import React from "react";

const PayPal = () => {
  const handleApprove = (data, actions) => {
    return actions.order.capture().then((details) => {
      alert(`Transaction completed by ${details.payer.name.given}`);
      // You can add additional logic here, such as updating your backend or state
    });
  };

  const handleError = (error) => {
    console.error("PayPal transaction error:", error);
    alert("An error occurred during the transaction.");
  };

  return (
    <div>
      <h2>Pay with PayPal</h2>
      <div id="paypal-button-container"></div>
      <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID_HERE"></script>
      <script>
        {`
          window.paypal.Buttons({
            createOrder: function(data, actions) {
              return actions.order.create({
                purchase_units: [{
                  amount: {
                    value: '10.00' // Set the amount you want to charge
                  }
                }]
              });
            },
            onApprove: ${handleApprove},
            onError: ${handleError}
          }).render('#paypal-button-container');
        `}
      </script>
    </div>
  );
};

export default PayPal;
