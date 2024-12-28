import React from 'react';
import { Loader2 } from 'lucide-react';

export const PaymentForm = () => {
  const [loading, setLoading] = React.useState(false);

  const handleStripeCheckout = () => {
    setLoading(true);
    window.location.href = 'https://buy.stripe.com/00gaHmghIeWc4364gj';
  };

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={handleStripeCheckout}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-bold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          'Complete Purchase with Card'
        )}
      </button>
      <p className="text-center text-sm text-gray-600">
        🔒 Secure Payment Processed by Stripe
      </p>
    </div>
  );
};