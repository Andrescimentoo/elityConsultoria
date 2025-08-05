
import { PrismaClient } from "@prisma/client/extension"; // configuar o prisma como banco:

export const prisma = new PrismaClient({
    log:['querry'],
})