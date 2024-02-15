export type UserId = string;
// export type Role = "ADMIN" | "USER";

// export const ROLES: Record<Role, Role> = {
//   ADMIN: "ADMIN",
//   USER: "USER",
// };

export type UserEntity = {
  id: UserId;
  email: string;
  // role: Role;
  emailVerified?: Date | null;
  name?: string | null;
  image?: string | null;
  hashedPassword?: string;

};

export type SessionEntity = {
  user: {
    id: UserId;
    email: string;
    // role: Role;
    name?: string | null;
    image?: string | null;
  };
  expires: string;
};

// Projections

export type Profile = {
  email: string;
  name?: string | null;
  image?: string | null;
};

// id                String          @id    @default(auto()) @map("_id") @db.ObjectId
//   name              String?
//   email             String?         @unique
//   emailVerified     DateTime?
//   image             String?
//   hashedPassword    String?
//   createdAt         DateTime        @default(now())
//   updatedAt         DateTime        @updatedAt