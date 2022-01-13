import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id_rol: number;

    @Column()
    nom_rol: string;

    @Column()
    trigramme_rol: string;
}