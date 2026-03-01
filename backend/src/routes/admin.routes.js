import { Router } from "express"

const router = Router()

// Admin routes
router.get("/dashboard", (req, res) => {
  res.send("Admin Dashboard")
})

export default router
