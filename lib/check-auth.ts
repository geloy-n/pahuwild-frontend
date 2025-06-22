import { getMe } from "@/actions/user-actions";
import { User } from "@/types";

export async function checkAuth() {
  try {
    const me = (await getMe()) as User;
    return me;
  } catch {
    return null;
  }
}
