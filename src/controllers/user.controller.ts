import { Router, Response, Request } from "express";
import { getMaxListeners } from "process";
import { UserEntity } from "../database/entities/UserEntity";
import { UserService } from "../services/user.service";
var bcrypt = require('bcrypt');

export class UserController {
    public router: Router;
    private userService: UserService;

    constructor() {
        this.router = Router();
        this.userService = new UserService(); //Create a new instance of UserController
        this.routes();
    }

    public index = async (req: Request, res: Response) => {
        const users = await this.userService.index();
        res.send(users).json(); // Execute the method of service
    }

    public create = async (req: Request, res: Response) => {
      
       const user = req['body'] as UserEntity;
        const passwordHash = await bcrypt.crypt.hash(user.mot_de_passe_uti, 10);
        user.mot_de_passe_uti = passwordHash;
       const newUser = await this.userService.create(user);
       res.send(newUser); // Execute the method of service
    }



    public update = async (req: Request, res: Response) => {
        const user = req['body'] as UserEntity;
        const id = req['params']['id'];

        res.send(this.userService.update(user, Number(id)));  // Execute the method of service

       
    }

    public delete = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        res.send(this.userService.delete(Number(id)));  // Execute the method of service

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