"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma-store/prisma/client");
const states = require("./json/states.json");
const prisma = new client_1.PrismaClient();
async function seed() {
    await prisma.shipmentStatusCatalog.createMany({
        data: [
            {
                name: "Pedido em processamento"
            },
            {
                name: "Pedido encaminhado para a entrega"
            },
            {
                name: "Pedido chegou ao destino"
            }
        ]
    });
    const country = await prisma.country.create({
        data: {
            code: 55,
            name: "Brazil"
        },
        select: {
            id: true
        }
    });
    states.map(async (state) => {
        await prisma.state.create({
            data: {
                UF: state.uf,
                name: state.nome,
                countryId: country.id
            }
        });
    });
    await prisma.paymentType.createMany({
        data: [
            {
                name: "Pix",
            },
            {
                name: "Cartão de crédito",
            },
            {
                name: "PayPal",
            },
        ]
    });
}
seed();
//# sourceMappingURL=seed.js.map