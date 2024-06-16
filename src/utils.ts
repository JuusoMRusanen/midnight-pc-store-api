import { OrderStatus } from "./types";

/**
 * Get string corresponding to the order status
 *
 * @param orderStatus order status
 * @returns order status as string
 */
export const getOrderStatus = (orderStatus: OrderStatus) =>
  ({
    [OrderStatus.CANCELLED]: "CANCELLED",
    [OrderStatus.DELIVERED]: "DELIVERED",
    [OrderStatus.PENDING]: "PENDING",
    [OrderStatus.SHIPPED]: "SHIPPED",
  }[orderStatus]);
