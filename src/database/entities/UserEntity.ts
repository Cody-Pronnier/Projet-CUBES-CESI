import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    firstname: string;

    @Column({ nullable: true })
    lastname: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    alias: string;
    
    @Column({ nullable: true })
    create_date: Date;

    @Column({ nullable: true })
    isActive: boolean;
}