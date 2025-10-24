import { Cart } from "./cart";
import { Book } from "./book";

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, (cart) => cart.items)
  cart: Cart;

  @ManyToOne(() => Book)
  book: Book;

  @Column()
  quantity: number;
}
