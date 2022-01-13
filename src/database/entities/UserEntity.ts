import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('utilisateur')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id_uti: number;

    @Column()
    nom_uti: string;

    @Column()
    prenom_uti: string;

    @Column()
    mail_uti: string;

    @Column()
    mot_de_passe_uti: string;

    @Column()
    date_creation_uti: Date;

    @Column()
    compte_actif_uti: boolean;

    @Column()
    pseudo_uti: string;
}