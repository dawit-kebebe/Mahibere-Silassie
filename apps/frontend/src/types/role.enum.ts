export const RoleEnum = {
    MANAGER: 'manager',
    PILGRIM_ORGANIZER: 'pilgrim_organizer',
    GOSPLE_ORGANIZER: 'gosple_organizer',
    FINANCE_ADMIN: 'finance_admin',
    DEPUTY_PRIEST: 'deputy_priest',
    MEMBER: 'member',
} as const

export type RoleType = typeof RoleEnum[keyof typeof RoleEnum]