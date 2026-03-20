import dotenv from "dotenv"
import express from "express"
import { clerkMiddleware } from "@clerk/express"
import { connectDB } from "./lib/db.js"
import adminRoutes from "./routes/admin.routes.js"
import albumRoutes from "./routes/album.routes.js"
import authRoutes from "./routes/auth.routes.js"
import songRoutes from "./routes/song.routes.js"
import statsRoutes from "./routes/stats.routes.js"
import userRoutes from "./routes/user.routes.js"
import fileupload from "express-fileupload"
import path from "path"

dotenv.config()

const app = express()
const __dirname = path.resolve()
app.use(express.json())

app.use(clerkMiddleware())
app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max file size
  }),
)

app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/admin", adminRoutes)
app.use("/api/songs", songRoutes)
app.use("/api/albums", albumRoutes)
app.use("/api/stats", statsRoutes)

// error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res
    .status(500)
    .json({
      message:
        process.env.NODE_ENV === "production"
          ? "Internal server error"
          : err.message,
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connectDB()
})
