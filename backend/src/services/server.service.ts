import { prisma } from "../lib/prisma"

type CreateServerParams = {
    name: string

    host: string
    port: number

    username: string

    privateKey?: string
}

export async function createServer({
    name,
    host,
    port,
    username,
    privateKey
}: CreateServerParams) {

    const server = await prisma.server.create({

        data: {
            name,

            host,
            port,

            username,

            privateKey: privateKey ?? null
        }

    })

    return server

}