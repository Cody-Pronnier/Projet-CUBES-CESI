import { Router, Response, Request, response } from "express";
import { createConnection, getConnection, getRepository } from "typeorm";
import { UserEntity } from "../database/entities/UserEntity";
import { UserService } from "../services/user.service";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'RXCT34ZE5GFDSFD756';
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
        const { email, mot_de_passe } = req.body;
        const user = await this.userService.getUserByMail(email);

        if (email === user.mail) {
            bcrypt.compare(mot_de_passe, user.mot_de_passe).then((rescompare: boolean) => {
                if (rescompare === false) {
                    console.log("T'ES AUSSI CON QU'ALEX MA PAROLE");
                } else {
                    const expireIn = 24 * 60 * 60;
                    const token = jwt.sign({
                        user: user
                    },
                        SECRET_KEY,
                        {
                            expiresIn: expireIn
                        });

                    res.header('Authorization', 'Bearer ' + token);

                }
            });


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
        this.router.post('/auth', this.auth);
    }
}