import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('abonnement')
export class AbonnementEntity {

    @PrimaryGeneratedColumn()
    id: number;

}