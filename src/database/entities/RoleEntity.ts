import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import {UserEntity} from "./UserEntity"
@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    trigramme: string;

    @ManyToMany(() => UserEntity)
    @JoinTable()
    userentities: UserEntity[];
}