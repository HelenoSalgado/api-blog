import { PrismaClient, Role } from "@prisma/client";
import * as states from './json/states.json';

const prisma = new PrismaClient();

async function seed() {

    const verifyPopulate = await prisma.software.findFirst();

    if(verifyPopulate.id)  return "O banco de dados já foi populado.";

    const software = await prisma.software.create({
        data: {
            name: "CMS Salop Web",
            acessLink: "",
            details: "Testando..."
        },
        select: {
            id: true
        }
    });

    // Cria planos de assinatura
    const plans = [
        {
            name: 'Basic',
            softwareId: software.id,
            currentPrice: '0.00',
            limitUsers: 3,
            active: true
        },
        {
            name: 'Bronze',
            softwareId: software.id,
            currentPrice: '20.00',
            limitUsers: 6,
            active: true
        }
    ]

    plans.map(async(plan) => {
        const planId = await prisma.plan.create({
          data: plan,
          select: {
            id: true
          }
        });

    // Cria tipos de grupos e preconecta os grupos de usuários a eles.
    const roles = ['ADMIN', 'AUTHOR', 'STORE'];

    roles.map(async(role: any) => {

        let limitUsers = 0;

        if(plan.name == "Basic"){
            if(role == Role.ADMIN) limitUsers = 1;
            if(role == Role.AUTHOR) limitUsers = 2;
            if(role == Role.STORE) limitUsers = 1;
        }

        if(plan.name == "Bronze"){
            if(role == Role.ADMIN) limitUsers = 2;
            if(role == Role.AUTHOR) limitUsers = 4;
            if(role == Role.STORE) limitUsers = 3;
        }

        const groupType = await prisma.groupType.create({
            data:{
                role
            },
            select: {
                id: true
            }
        });

        await prisma.userGroup.create({
            data: {
               limitUsers,
               groupTypeId: groupType.id,
               planId: planId.id
            }
        });
        
    })
    })
   
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