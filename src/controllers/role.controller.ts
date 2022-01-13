import { Router, Response, Request } from "express";
import { RoleEntity } from "../database/entities/RoleEntity";
import { RoleService } from "../services/role.service";


export class RoleController {
    public router: Router;
    private roleService: RoleService;

    constructor() {
        this.router = Router();
        this.roleService = new RoleService(); //Create a new instance of UserController
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        const roles = await this.roleService.index();
        res.send(roles).json(); // Execute the method of service
    }

    public create = async (req: Request, res: Response) => {
        const role = req['body'] as RoleEntity;
        const newRole = await this.roleService.create(role);
        res.send(newRole); // Execute the method of service
 
    }

    public update = async (req: Request, res: Response) => {
        const role = req['body'] as RoleEntity;
        const id = req['params']['id'];

        res.send(this.roleService.update(role, Number(id)));  // Execute the method of service


    }

    public delete = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        res.send(this.roleService.delete(Number(id)));  // Execute the method of service

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