import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AbonnementEntity {

    @PrimaryGeneratedColumn()
    id: number;

}