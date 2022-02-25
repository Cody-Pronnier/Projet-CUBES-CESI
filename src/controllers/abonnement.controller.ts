import { Router, Response, Request } from "express";
import { AbonnementEntity } from "../database/entities/AbonnementEntity";
import { AbonnementService } from "../services/abonnement.service";


export class AbonnementController {
    public router: Router;
    private abonnementService: AbonnementService;

    constructor() {
        this.router = Router();
        this.abonnementService = new AbonnementService(); //Create a new instance of RessourceController
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        const abonnements = await this.abonnementService.index();
        res.send(abonnements).json(); // Execute the method of service
    }

    public create = async (req: Request, res: Response) => {
        const abonnement = req['body'] as AbonnementEntity;
        const newAbonnement = await this.abonnementService.create(abonnement);
        res.send(newAbonnement); // Execute the method of service

    }

    public update = async (req: Request, res: Response) => {
        const abonnement = req['body'] as AbonnementEntity;
        const id = req['params']['id'];

        res.send(this.abonnementService.update(abonnement, Number(id)));  // Execute the method of service


    }

    public delete = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        res.send(this.abonnementService.delete(Number(id)));  // Execute the method of service

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