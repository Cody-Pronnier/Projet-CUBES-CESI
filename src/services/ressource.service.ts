import { getConnection } from 'typeorm';
import { RessourceEntity } from '../database/entities/RessourceEntity';
import { RessourceRepository } from '../repository/ressource.repository';

export class RessourceService {
    private ressourceRepository: RessourceRepository;

    constructor() {
        this.ressourceRepository = getConnection('projetCUBES').getCustomRepository(RessourceRepository);
    }

    public index = async () => {
        const ressources = await this.ressourceRepository.find()
        console.log(ressources);
        return ressources;
    }

    public create = async (ressource: RessourceEntity) => {
        const newRessource = await this.ressourceRepository.save(ressource);
        return newRessource;
    }

    public update = async (user: RessourceEntity, id: number) => {
        const updatedRessource = await this.ressourceRepository.update(id, user);
        return updatedRessource;
    }

    public delete = async (id: number) => {
        const deletedRessource = await this.ressourceRepository.delete(id);
        return deletedRessource;
    }

}