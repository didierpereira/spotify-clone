import User from "../models/user.model.js"

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body

    const user = await User.findOne({ clerkId: id })

    if (!user) {
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      })
    }
    res
      .status(200)
      .json({ message: "User authenticated successfully", success: true })
  } catch (error) {
    console.error("Error during authentication:", error)
    res.status(500).json({ message: "Internal server error", success: false })
  }
}
