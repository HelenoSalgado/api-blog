import { PrismaClient, Role } from "@prisma-blog/prisma/client";
const prisma = new PrismaClient();

async function seed() {
    const verifyPopulate = await prisma.software.findFirst();

    if(verifyPopulate) throw new Error("O banco de dados já foi populado.");

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
}

seed();