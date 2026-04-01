import { useChatStore } from "@/stores/useChatStore"
import { useEffect } from "react"

const FriendsActivity = () => {
  const { users, isLoading, error, fetchUsers } = useChatStore()

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  console.log("====================================")
  console.log(users)
  console.log("====================================")

  return <div>FriendsActivity</div>
}

export default FriendsActivity
