import { nextAuthConfig } from "./next-auth-config";
import { getServerSession } from "next-auth";

export const getAppSessionServer = async () => await getServerSession(nextAuthConfig);
