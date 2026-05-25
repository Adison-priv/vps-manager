import { Client } from "ssh2"
import fs from "fs"

type ConnectSSHParams = {
    host: string
    port: number
    username: string
    privateKey: string
}

export function connectSSH({
    host,
    port,
    username,
    privateKey
}: ConnectSSHParams) {

    return new Promise((resolve, reject) => {

        const conn = new Client()

        conn.on("ready", () => {

            console.log("SSH connected")

            conn.exec("hostname", (err, stream) => {

                if (err) {

                    reject(err)
                    return

                }

                let data = ""

                stream.on("data", (chunk:any) => {

                    data += chunk.toString()

                })

                stream.on("close", () => {

                    conn.end()

                    resolve(data.trim())

                })

            })

        })

        conn.on("error", (err) => {

            reject(err)

        })

        conn.connect({
            host,
            port,
            username,

            privateKey: fs.readFileSync(privateKey)
        })

    })

}