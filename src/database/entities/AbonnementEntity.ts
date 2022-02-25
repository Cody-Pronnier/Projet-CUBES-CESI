import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity"
@Entity('abonnement')
export class AbonnementEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => UserEntity)
    @JoinTable()
    userentities: UserEntity[];

}