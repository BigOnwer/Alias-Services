import { CardContent } from "@/components/ui/card";

const PaymentDetails = () => {
  return (
    <CardContent className="space-y-4">
      <div className="border rounded-lg p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Order ID:</span>
          <span className="font-medium">#ORD-12345</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Date:</span>
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Payment Method:</span>
          <span className="font-medium">Credit Card</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Amount:</span>
          <span className="font-medium">R$70,00</span>
        </div>
      </div>
    </CardContent>
  );
};

export default PaymentDetails;
