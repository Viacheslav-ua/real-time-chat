import { nextAuthConfig } from "@/shared/config/next-auth-config";
import { getServerSession } from "next-auth";

export const getAppSessionServer = async () => await getServerSession(nextAuthConfig);
