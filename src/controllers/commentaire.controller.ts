import { Router, Response, Request } from "express";
import { CommentaireEntity } from "../database/entities/CommentaireEntity";
import { CommentaireService } from "../services/commentaire.service";


export class CommentaireController {
    public router: Router;
    private commentaireService:CommentaireService;

    constructor() {
        this.router = Router();
        this.commentaireService = new CommentaireService(); //Create a new instance of RessourceController
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        const commentaires = await this.commentaireService.index();
        res.send(commentaires).json(); // Execute the method of service
    }

    public create = async (req: Request, res: Response) => {
        const commentaire = req['body'] as CommentaireEntity;
        const newCommentaire = await this.commentaireService.create(commentaire);
        res.send(newCommentaire); // Execute the method of service

    }

    public update = async (req: Request, res: Response) => {
        const commentaire = req['body'] as CommentaireEntity;
        const id = req['params']['id'];

        res.send(this.commentaireService.update(commentaire, Number(id)));  // Execute the method of service


    }

    public delete = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        res.send(this.commentaireService.delete(Number(id)));  // Execute the method of service

    }

    /**
     * Configure the routes of controller
     */
    public routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}