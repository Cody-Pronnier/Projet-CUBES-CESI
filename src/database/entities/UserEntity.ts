import { Column, Entity, PrimaryGeneratedColumn, OneToMany,  ManyToMany, JoinTable } from "typeorm";
import {RessourceEntity} from "./RessourceEntity"
import {RoleEntity} from "./RoleEntity"

@Entity()
export class UserEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    mail: string;

    @Column()
    mot_de_passe: string;

    @Column()
    date_creation: Date = new Date();

    @Column()
    compte_actif: boolean;

    @Column()
    pseudo: string;

    @Column()
    avatar: Blob;

    

    @OneToMany(() => RessourceEntity, ressource => ressource.utilisateur)
    ressources: RessourceEntity[];

    @ManyToMany(() => RoleEntity)
    @JoinTable()
    roleentities: RoleEntity[];


}