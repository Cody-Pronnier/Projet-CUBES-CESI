import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class RoleEntity {
    @PrimaryGeneratedColumn()
    id_rol: number;

    @Column({ nullable: true })
    nom_rol: string;

    @Column({ nullable: true })
    trigramme_rol: string;
}