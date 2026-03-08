export class CreateOrderDto {
  userId: string;
  totalAmount: number;
  shippingAddress?: string;
}
