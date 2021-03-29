export type OrderSummaryItem = {
  count: number;
  name: string;
  price: number;
}

type OrderSummaryProps = {
  description: string;
  items: OrderSummaryItem[];
  title: string;
  totalPrice: number;
}

export const OrderSummary = ({ description, items, title, totalPrice }: OrderSummaryProps) => {
  const summaryItems = items.map(({ count, name, price }) => <li key={name}>{name.toLowerCase()
    .replace(/^[a-z]/, (letter) => letter.toUpperCase())}: {count} x ${price.toFixed(2)}</li>);
  return (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {summaryItems}
      </ul>
      <p><strong>Total Price: ${totalPrice}</strong></p>
      <p>Continue to checkout?</p>
    </>
  );
};