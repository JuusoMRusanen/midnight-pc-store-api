import { OrderProduct } from "@prisma/client";
import { Context } from "src/types";

/**
 * Find and return orderProduct of order
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns category
 */
function products(parent: OrderProduct, _args: unknown, context: Context) {
  return context.prisma.order
    .findUnique({ where: { id: parent.id } })
    .orderItems();
}

/**
 * Find and return user of order
 *
 * @param parent parent
 * @param _args args
 * @param context context
 * @returns user
 */
function user(parent: OrderProduct, _args: unknown, context: Context) {
  return context.prisma.order.findUnique({ where: { id: parent.id } }).user();
}

export default {
  products,
  user,
};
