import { CartModel } from "../model/cart";
import { bookModel} from "../model/book";
import { ObjectId } from "mongodb";

class CartService {
  async addToCart(userId: ObjectId, bookId: ObjectId, quantity: number) {
    const book = await bookModel.findById(bookId);
    if (!book) throw new Error("Book not found");

    let cart = await CartModel.findOne({ userId });

    const itemTotal = book.price * quantity;

    if (!cart) {
      // Create new cart
      cart = await CartModel.create({
        userId,
        items: [{ bookId, quantity, totalPrice: itemTotal }],
        totalAmount: itemTotal
      });
    } else {
      // Check if book already in cart
      const existingItem = cart.items.find(
        (item: any) => item.bookId.toString() === bookId.toString()
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice += itemTotal;
      } else {
        cart.items.push({ bookId, quantity, totalPrice: itemTotal });
      }

      cart.totalAmount = cart.items.reduce((sum: number, i: any) => sum + i.totalPrice, 0);
      await cart.save();
    }

    return cart;
  }

  async getUserCart(userId: ObjectId) {
    const cart = await CartModel.findOne({ userId }).populate("items.bookId");
    if (!cart) throw new Error("Cart not found");
    return cart;
  }
}

export const cartService = new CartService();
