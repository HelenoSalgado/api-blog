import { PrismaClient } from "@prisma-store/prisma/client";
import * as states from './json/states.json';

const prisma = new PrismaClient();

async function seed() {
   
    // Catálogo de status de pedido
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

    // País aceito para envio de produtos
    const country = await prisma.country.create({
        data: {
            code: 55,
            name: "Brazil"
        },
        select: {
            id: true
        }
    });

    // Lista com os estados da federação
    states.map(async(state) => {
        await prisma.state.create({
            data: {
                UF: state.uf,
                name: state.nome,
                countryId: country.id
            }
        })
    })

    // Formas de pagamentos aceitas
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