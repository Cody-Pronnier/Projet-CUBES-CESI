import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('utilisateur')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id_uti: number;

    @Column({ nullable: true })
    nom_uti: string;

    @Column({ nullable: true })
    prenom_uti: string;

    @Column({ nullable: true })
    mail_uti: string;

    @Column({ nullable: true })
    mot_de_passe_uti: string;

    @Column({ nullable: true })
    date_creation_uti: Date;

    @Column({ nullable: true })
    compte_actif_uti: boolean;

    @Column({ nullable: true })
    pseudo_uti: string;
}