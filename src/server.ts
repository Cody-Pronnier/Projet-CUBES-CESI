import express, { Request, Response } from 'express';
import { UserController } from './controllers/user.controller'; // import the post controller
import { RoleController } from './controllers/role.controller';
import { createConnection } from "typeorm";

const cors = require('cors');

const corsOptions = {
    origin:'http://localhost:3005',
}
class Server {
    private userController: UserController;
    private roleController: RoleController;
    private app: express.Application;

    

    constructor() {
        this.app = express(); // init the application
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

        this.app.get("/", cors(corsOptions), (req: Request, res: Response) => {
            res.send("Hello world!");
        });

        this.app.use(`/api/utilisateur/`, cors(corsOptions), this.userController.router); // Configure the new routes of the controller user
        this.app.use(`/api/role/`, cors(corsOptions), this.roleController.router); // Configure the new routes of the controller user
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