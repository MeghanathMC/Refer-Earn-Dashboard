import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/Components/ui/dialog";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
}

export function PaymentModal({ isOpen, onClose, amount }: PaymentModalProps) {
  const handlePayment = (method: string) => {
    // Handle payment logic here
    console.log(`Processing payment of ${amount} via ${method}`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center">Choose Payment Method</DialogTitle>
        </DialogHeader>
        <div className="mt-6 space-y-4">
          <div className="text-center mb-6">
            <p className="text-gray-600">Amount to Pay</p>
            <p className="text-2xl font-bold text-gray-800">{amount}</p>
          </div>
          
          <button
            onClick={() => handlePayment('razorpay')}
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <i className="fi fi-rr-bank text-xl"></i>
            Pay with Razorpay
          </button>

          <button
            onClick={() => handlePayment('upi')}
            className="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <i className="fi fi-rr-mobile-button text-xl"></i>
            Pay with UPI
          </button>

          <button
            onClick={() => handlePayment('card')}
            className="w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <i className="fi fi-rr-credit-card text-xl"></i>
            Pay with Card
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 