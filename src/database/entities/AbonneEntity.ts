import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import {UserEntity} from "./UserEntity"
@Entity('abonne')
export class AbonneEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => UserEntity)
    @JoinTable()
    userentities: UserEntity[];

}
