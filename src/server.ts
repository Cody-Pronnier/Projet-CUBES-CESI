import express, { Request, Response } from 'express';
import { UserController } from './controllers/user.controller'; // import the post controller
import { RoleController } from './controllers/role.controller';
import { RessourceController } from './controllers/ressource.controller';
import { createConnection } from "typeorm";
import { CommentaireController } from './controllers/commentaire.controller';
import { AbonnementController } from './controllers/abonnement.controller';


const cors = require('cors');

const corsOptions = {
    origin:'http://localhost:3005',
}
class Server {
    private userController: UserController;
    private roleController: RoleController;
    private ressourceController: RessourceController;
    private commentaireController: CommentaireController;
    private abonnementController: AbonnementController;

    private app: express.Application;

    

    constructor() {

        //On initialise express pour l'app
        this.app = express(); 
        this.configuration();
        this.routes();
    }

    /**
     * Method to configure the server,
     */
    public configuration() {
        this.app.set('port', process.env.PORT || 3001);
        this.app.use(express.json());
    }

    /**
     * Method to configure the routes
     */
     public async routes() {
        await createConnection({
            type: "postgres",
            host: "postgresql-cubes.alwaysdata.net",
            port: 5433,
            username: "cubes",
            password: "15342679",
            database: "cubes_reseau_social",
            entities: ["build/database/entities/**/*.js"],
            synchronize: true,
            name: "projetCUBES"
        });

        this.userController = new UserController();
        this.roleController = new RoleController();
        this.ressourceController = new RessourceController();
        this.commentaireController = new CommentaireController();
        this.abonnementController = new AbonnementController();

        //--------------------------Routes------------------------//
        this.app.get("/", cors(corsOptions), (req: Request, res: Response) => {
            res.send("Hello world!");
        });
        this.app.use(`/api/utilisateur/`, cors(corsOptions), this.userController.router); // Configure the new routes of the controller user
        this.app.use(`/api/role/`, cors(corsOptions), this.roleController.router); // Configure the new routes of the controller user
        // Configure the new routes of the controller user
        this.app.use(`/api/ressource/`, cors(corsOptions), this.ressourceController.router); // Configure the new routes of the controller ressource
        this.app.use(`/api/commentaire/`, cors(corsOptions), this.commentaireController.router); // Configure the new routes of the controller commentaire
        this.app.use(`/api/abonnement/`, cors(corsOptions), this.abonnementController.router); // Configure the new routes of the controller abonnement

    }

    /**
     * Used to start the server
     */
    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port.`);
        });
    }
}

const server = new Server(); // Create server instance
server.start(); // Execute the server