import express from "express"
import cors from "cors"

import serverRoutes from "./routes/server.routes"

const app = express()

app.use(cors())
app.use(express.json())

app.use("/servers", serverRoutes)

app.listen(3001, () => {

    console.log("Backend running on port 3001")

})