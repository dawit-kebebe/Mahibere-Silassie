import type { RoleType } from "./role.enum";

export interface UserType {
    id: string;
    telegram_id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    is_bot: boolean;
    is_active: boolean;

    avatar?: string;
    role?: RoleType;
}