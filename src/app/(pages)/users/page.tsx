"use client"

import { Button } from "@/shared/ui/button"
import { signOut } from "next-auth/react"


const Users = () => {

  return (
    <Button onClick={() => signOut()}>Вийти</Button>
    // <button onClick={() => signOut()}>Вийти</button>
  )
}

export default Users