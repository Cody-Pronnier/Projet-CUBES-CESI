import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {UserEntity} from "./UserEntity"

@Entity()
export class RessourceEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    description: string;

    @Column()
    date_creation: Date;

    @Column()
    texte: string;

    @Column()
    image: string;

    @Column()
    audio: string;

    @ManyToOne(() => UserEntity, utilisateur => utilisateur.ressources)
    utilisateur: UserEntity;
}