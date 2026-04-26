import { Router } from "express"
import { getAllUsers, getMessages } from "../controllers/user.controller.js"
import { protectedRoute } from "../middleware/auth.middleware.js"
const router = Router()

router.get("/", protectedRoute, getAllUsers)
router.get("/messages/:userId", protectedRoute, getMessages)

export default router
