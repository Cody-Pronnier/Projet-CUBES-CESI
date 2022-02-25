import { EntityRepository, Repository } from "typeorm";
import { CommentaireEntity } from "../database/entities/CommentaireEntity";

@EntityRepository(CommentaireEntity)
export class CommentaireRepository extends Repository<CommentaireEntity> {

}