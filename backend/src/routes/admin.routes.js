import { Router } from "express"
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js"

const router = Router()

// Admin routes
router.get("/", protectedRoute, requireAdmin, (req, res) => {
  res.send("Admin Dashboard")
})

export default router
