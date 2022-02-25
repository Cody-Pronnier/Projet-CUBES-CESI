import { EntityRepository, Repository } from "typeorm";
import { RessourceEntity } from '../database/entities/RessourceEntity';

@EntityRepository(RessourceEntity)
export class RessourceRepository extends Repository<RessourceEntity> {

}