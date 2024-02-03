import NextAuth from "next-auth";
// import { SessionEntity, UserEntity } from "./_domain/types";

declare module "next-auth" {
  interface Session {
    // user: SessionEntity["user"];
    user: {
      // id: string
      name?: string
      email: string
      image?: string 
    }
  }
//   // interface User extends UserEntity {}
  // interface User {
  //   id: string
  //   email: string
  //   name?: string
  //   image?: string
  // }
}