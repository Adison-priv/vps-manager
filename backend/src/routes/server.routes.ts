import {prisma} from "../lib/prisma"

import { Router } from "express"
import {
    connectSSH,
    getHostname,
    getCpuCores,
    getRamTotal,
    getDiskTotal,
    getOS
} from "../services/ssh.service"

import { createServer } from "../services/server.service"

const router = Router()

router.post("/", async (req, res) => {

    try {

        const {
            host,
            port,
            username,

            password,
            privateKey
        } = req.body

        const conn = await connectSSH({
            host,
            port,
            username,

            password,
            privateKey
        })

        const hostname = await getHostname(conn)

        const cpuCores = await getCpuCores(conn)

        const ramTotal = await getRamTotal(conn)

        const diskTotal = await getDiskTotal(conn)

        const os = await getOS(conn)

        const region = "Unknown"

        const statusServer = "Online"

        conn.end()

        const server = await createServer({

            hostname,

            host,
            port,

            username,

            os: os ?? null,
            region: region ?? null,
            status: statusServer ?? null,

            cpuCores: Number(cpuCores),

            ramTotal: Number(ramTotal),

            diskTotal: diskTotal ?? null,


            privateKey,
            password
        })

        res.json({
            success: true,
            server
        })

    } catch (error: any) {

    console.log(error)

    res.status(500).json({
        success: false,
        message: error.message,
        error
    })

}

})

router.get("/", async (req, res) => {

    try {

        const servers = await prisma.server.findMany()

        res.json({
            success: true,
            servers
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch servers"
        })

    }
    
})

router.get("/:id", async (req, res) => {

    try {

        const { id } = req.params

        const server = await prisma.server.findUnique({
            where: {
                id
            }
        })

        if (!server) {

            return res.status(404).json({
                success: false,
                message: "Server not found"
            })

        }

        res.json({
            success: true,
            server
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to fetch server"
        })

    }

})

export default router