import dotenv from "dotenv"
import express from "express"
import {clerkMiddleware} from "@clerk/express"
import {connectDB} from "./lib/db.js"
import adminRoutes from "./routes/admin.routes.js"
import albumRoutes from "./routes/album.routes.js"
import authRoutes from "./routes/auth.routes.js"
import songRoutes from "./routes/song.routes.js"
import statsRoutes from "./routes/stats.routes.js"
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(clerkMiddleware())

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/songs", songRoutes)
app.use("/api/albums", albumRoutes)
app.use("/api/stats", statsRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connectDB()
})
