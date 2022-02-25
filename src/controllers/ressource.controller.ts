import { Router, Response, Request } from "express";
import { RessourceEntity } from "../database/entities/RessourceEntity";
import { RessourceService } from "../services/ressource.service";


export class RessourceController {
    public router: Router;
    private ressourceService: RessourceService;

    constructor() {
        this.router = Router();
        this.ressourceService = new RessourceService(); //Create a new instance of RessourceController
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        const ressources = await this.ressourceService.index();
        res.send(ressources).json(); // Execute the method of service
    }

    public create = async (req: Request, res: Response) => {
        const ressource = req['body'] as RessourceEntity;
        const newRessource = await this.ressourceService.create(ressource);
        res.send(newRessource); // Execute the method of service

    }

    public update = async (req: Request, res: Response) => {
        const ressource = req['body'] as RessourceEntity;
        const id = req['params']['id'];

        res.send(this.ressourceService.update(ressource, Number(id)));  // Execute the method of service


    }

    public delete = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        res.send(this.ressourceService.delete(Number(id)));  // Execute the method of service

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