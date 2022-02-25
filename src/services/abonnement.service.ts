import { getConnection } from 'typeorm';
import { AbonnementEntity } from '../database/entities/AbonnementEntity';
import { AbonnementRepository } from '../repository/abonnement.repository';

export class AbonnementService {
    private abonnementRepository: AbonnementRepository;

    constructor() {
        this.abonnementRepository = getConnection('projetCUBES').getCustomRepository(AbonnementRepository);
    }

    public index = async () => {
        const abonnements = await this.abonnementRepository.find()
        console.log(abonnements);
        return abonnements;
    }

    public create = async (abonnement: AbonnementEntity) => {
        const newAbonnement = await this.abonnementRepository.save(abonnement);
        return newAbonnement;
    }

    public update = async (user: AbonnementEntity, id: number) => {
        const updatedAbonnement = await this.abonnementRepository.update(id, user);
        return updatedAbonnement;
    }

    public delete = async (id: number) => {
        const deletedAbonnement = await this.abonnementRepository.delete(id);
        return deletedAbonnement;
    }
}