import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient;
}

export interface QueryProduct {
  id: string;
}

export interface QueryUser {
  id: string;
}

export interface QueryOrder {
  id: string;
}

export enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  CANCELLED,
}
