import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {RessourceEntity} from "./RessourceEntity"

@Entity()
export class CommentaireEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    date_creation: Date = new Date();

    @Column()
    validation: boolean;

    @Column()
    robot: boolean;

    @ManyToOne(() => RessourceEntity, ressource => ressource.commentaires)
    ressource: RessourceEntity;
}