import { Client, ConnectConfig } from "ssh2"

type ConnectSSHParams = {
    host: string
    port: number
    username: string
    privateKey?: string
    password?: string
}

export function connectSSH({
    host,
    port,
    username,
    privateKey,
    password
}: ConnectSSHParams): Promise<Client> {

    return new Promise((resolve, reject) => {

        const conn = new Client()

        conn.on("ready", () => {

            console.log("SSH connected")

            resolve(conn)

        })

        conn.on("error", (err) => {

            reject(err)

        })

        conn.on("error", (err) => {
            console.log("SSH ERROR:", err)
        })

        const config: ConnectConfig = {
            host,
            port,
            username
        }

        if (password) {
            config.password = password
        }

        if (privateKey) {
            config.privateKey = privateKey
        }

        conn.connect(config)

    })

}

export function executeCommand(
    conn: Client,
    command: string
): Promise<string> {

    return new Promise((resolve, reject) => {

        conn.exec(command, (err, stream) => {

            if (err) {
                reject(err)
                return
            }

            let data = ""

            stream.on("data", (chunk: Buffer) => {

                data += chunk.toString()

            })

            stream.on("close", () => {

                resolve(data.trim())

            })

        })

    })

}

export async function getHostname(conn: Client) {

    return executeCommand(conn, "hostname")

}

export async function getCpuCores(conn: Client) {

    return executeCommand(conn, "nproc")

}

export async function getRamTotal(conn: Client) {

    return executeCommand(
        conn,
        "free -m | awk '/Mem:/ {print $2}'"
    )

}

export async function getDiskTotal(conn: Client) {

    return executeCommand(
        conn,
        "df -BG / | awk 'NR==2 {print $2}'"
    )

}

export async function getOS(conn: Client) {

    const output = await executeCommand(
        conn,
        "cat /etc/os-release | grep PRETTY_NAME"
    )

    return output
        .replace('PRETTY_NAME=', "")
        .replace(/"/g, "")
        .trim()

}