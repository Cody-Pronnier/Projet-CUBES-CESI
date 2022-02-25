import { getConnection } from 'typeorm';
import { AbonneEntity } from '../database/entities/AbonneEntity';
import { AbonneRepository } from '../repository/abonne.repository';

export class AbonneService {
    private abonneRepository: AbonneRepository;

    constructor() {
        this.abonneRepository = getConnection('projetCUBES').getCustomRepository(AbonneRepository);
    }

    public index = async () => {
        const abonnes = await this.abonneRepository.find()
        console.log(abonnes);
        return abonnes;
    }

    public create = async (abonne: AbonneEntity) => {
        const newAbonne = await this.abonneRepository.save(abonne);
        return newAbonne;
    }

    public update = async (user: AbonneEntity, id: number) => {
        const updatedAbonne = await this.abonneRepository.update(id, user);
        return updatedAbonne;
    }

    public delete = async (id: number) => {
        const deletedAbonne = await this.abonneRepository.delete(id);
        return deletedAbonne;
    }
}