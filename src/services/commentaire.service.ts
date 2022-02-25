// import { getConnection } from 'typeorm';
// import { CommentaireEntity } from '../database/entities/CommentaireEntity';
// import { CommentaireRepository } from '../repository/commentaire.repository';

// export class CommentaireService {
//     private commentaireRepository: CommentaireRepository;

//     constructor() {
//         this.commentaireRepository = getConnection('projetCUBES').getCustomRepository(CommentaireRepository);
//     }

//     public index = async () => {
//         const commentaires = await this.commentaireRepository.find()
//         console.log(commentaires);
//         return commentaires;
//     }

//     public create = async (commentaire: CommentaireRepository) => {
//         const newCommentaire = await this.commentaireRepository.save(commentaire);
//         return newCommentaire;
//     }

//     public update = async (user: CommentaireRepository, id: number) => {
//         const updatedCommentaire = await this.commentaireRepository.update(id, user);
//         return updatedCommentaire;
//     }

//     public delete = async (id: number) => {
//         const deletedCommentaire = await this.commentaireRepository.delete(id);
//         return deletedCommentaire;
//     }
// }