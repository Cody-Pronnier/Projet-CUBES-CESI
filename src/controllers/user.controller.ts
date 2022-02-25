import { Router, Response, Request, response } from "express";
import { UserEntity } from "../database/entities/UserEntity";
import { UserService } from "../services/user.service";
var bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;
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
        user.compte_actif = false;
        user.date_creation = new Date();
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.mot_de_passe, salt);
        user.mot_de_passe = hash;
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

    public getUserById = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        try {
            const response = await this.userService.getUserById(Number(id));
            res.send(response);
        }
        catch (e) {
            throw new Error('Erreur du temps de requête');
        }
    }

    public auth = async (req: Request, res: Response) => {
        const id = req['params']['id'];
        const user = req['body'] as UserEntity;
        const response = await this.userService.getUserById(Number(id));
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(user.mot_de_passe, salt);

        var salt2 = bcrypt.genSaltSync(10);
        var hash2 = bcrypt.hashSync("TESTNUMERO7", salt);
        var mail = "TESTNUMERO7@test.com";

        if ((hash === hash2) && (user.mail === mail)) {
            console.log("GG C'EST LE MEME MOT DE PASSE DYLAN JE TE FILE TON TOKEN JWT");
        } else {
            console.log("T'ES AUSSI CON QU'ALEX MA PAROLE");
        }
        res.send(response);
    }
        /**
     * Configure the routes of controller
     */
    public routes() {
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
        this.router.get('/:id', this.getUserById);
        this.router.get('/test/:id', this.auth);
    }
}