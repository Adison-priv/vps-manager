import { prisma } from "../lib/prisma"

type CreateServerParams = {

    hostname: string

    host: string
    port: number

    username: string

    cpuCores?: number

    ramTotal?: number

    diskTotal?: string

    os?: string

    region?: string

    status?: string

    privateKey?: string
    
    password?: string
}

export async function createServer({
    hostname,
    host,
    port,
    username,
    
    cpuCores,
    ramTotal,
    diskTotal,
    os,
    region,
    status,

    privateKey,
    password
}: CreateServerParams) {

    const server = await prisma.server.create({

        data: {
            hostname,

            host,
            port,

            username,

            cpuCores: cpuCores ?? null,
            ramTotal: ramTotal ?? null,
            diskTotal: diskTotal ?? null,
            os: os ?? null,
            region: region ?? null,
            status: status ?? null,

            privateKey: privateKey ?? null,
            password: password ?? null
        }

    })

    return server

}