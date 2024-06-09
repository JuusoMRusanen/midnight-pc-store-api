import { Prisma } from "@prisma/client";

/**
 * Mockdata for Users
 */
export const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@prisma.io",
  },
  {
    name: "Nilu",
    email: "nilu@prisma.io",
  },
  {
    name: "Mahmoud",
    email: "mahmoud@prisma.io",
  },
];
