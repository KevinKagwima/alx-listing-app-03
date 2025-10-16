const OrderSummary: React.FC<{ bookingDetails: any }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex items-center mt-4">
      <img src="https://example.com/property.jpg" alt="Property" className="w-32 h-32 object-cover rounded-md" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <p className="text-sm text-gray-500">4.76 (345 reviews)</p>
        <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
Add Cancellation Policy and Ground Rules:

Below the form, include a section that outlines:

Cancellation Policy: Display a notice that users can cancel for a full refund before a certain date, and partial refund after that date.

Ground Rules: Display a list of house rules for guests (e.g., “Follow the house rules” and “Treat your Host’s home like your own”).


const CancellationPolicy = () => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold">Cancellation policy</h2>
    <p className="mt-2 text-gray-600">
      Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
    </p>

    <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
    <ul className="mt-2 text-gray-600 list-disc list-inside">
      <li>Follow the house rules</li>
      <li>Treat your Host’s home like your own</li>
    </ul>
  </div>
);

export default CancellationPolicy;