function TestNumbersBox() {
  return (
    <div className="rounded-xl border p-4 -mt-10 mb-4">
      <div>
        <p className="text-xl font-bold">
          To test payments, use the following card details:
        </p>
        <ul>
          <li>
            <strong>Card Number:</strong> <span>4242 4242 4242 4242</span>
          </li>
          <li>
            <strong>CVV:</strong> Any 3 digits (e.g., <span>123</span>)
          </li>
          <li>
            <strong>Expiration Date:</strong> Any future date (e.g.,{" "}
            <span>12/25</span>)
          </li>
        </ul>
      </div>
      <p className="mt-4">
        Need more test card numbers?{" "}
        <a
          href="https://docs.stripe.com/testing"
          target="_blank"
          className="font-bold hover:text-red-500"
        >
          Click here
        </a>
      </p>
    </div>
  );
}
export default TestNumbersBox;
