import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'bigint', nullable: false, unique: true })
    telegram_id: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    first_name: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    last_name?: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    username?: string;

    @Column({ type: 'boolean', default: false, nullable: false })
    is_bot: boolean;

    @Column({ type: 'boolean', default: false, nullable: false })
    is_active: boolean;
}