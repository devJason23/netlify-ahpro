import React from 'react';

export const PaymentForm = () => {
  return (
    <div className="space-y-6">
      <a
        href="https://buy.stripe.com/00gaHmghIeWc4364gj"
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-bold text-center transition-colors"
      >
        Complete Purchase with Card
      </a>
      <p className="text-center text-sm text-gray-600">
        🔒 Secure Payment Processed by Stripe
      </p>
    </div>
  );
};
