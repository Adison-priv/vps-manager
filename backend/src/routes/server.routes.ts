import { Router } from "express"
import { connectSSH } from "../services/ssh.service"
import { createServer } from "../services/server.service"

const router = Router()

router.post("/", async (req, res) => {

    try {

        const {
            name,

            host,
            port,

            username,

            privateKey
        } = req.body

        await connectSSH({
            host,
            port,
            username,
            privateKey
        })

        const server = await createServer({
            name,

            host,
            port,

            username,

            privateKey
        })

        res.json({
            success: true,
            server
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "Failed to add server",
            error
        })

    }

})

export default router