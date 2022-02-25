import { Router, Response, Request } from "express";
import { AbonneEntity } from "../database/entities/AbonneEntity";
import { AbonneService } from "../services/abonne.service";


export class AbonneController {
    public router: Router;
    private abonneService: AbonneService;

    constructor() {
        this.router = Router();
        this.abonneService = new AbonneService(); //Create a new instance of RessourceController
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        const abonnes = await this.abonneService.index();
        res.send(abonnes).json(); // Execute the method of service
    }

    public create = async (req: Request, res: Response) => {
        const abonne = req['body'] as AbonneEntity;
        const newAbonne = await this.abonneService.create(abonne);
        res.send(newAbonne); // Execute the method of service

    }

    public update = async (req: Request, res: Response) => {
        const abonne = req['body'] as AbonneEntity;
        const id = req['params']['id'];

        res.send(this.abonneService.update(abonne, Number(id)));  // Execute the method of service


    }

    public delete = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        res.send(this.abonneService.delete(Number(id)));  // Execute the method of service

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