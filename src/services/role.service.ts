import { getConnection } from 'typeorm';
import { RoleEntity } from '../database/entities/RoleEntity';
import { RoleRepository } from '../repository/role.repository';

export class RoleService {
    private roleRepository: RoleRepository;

    constructor() {
        this.roleRepository = getConnection('projetCUBES').getCustomRepository(RoleRepository);
    }

    public index = async () => {
        const roles = await this.roleRepository.find()
        console.log(roles);
        return roles;
    }

    public create = async (role: RoleEntity) => {
        const newRole = await this.roleRepository.save(role);
        return newRole;
    }

    public update = async (user: RoleEntity, id: number) => {
        const updatedRole = await this.roleRepository.update(id, user);
        return updatedRole;
    }

    public delete = async (id: number) => {
        const deletedRole = await this.roleRepository.delete(id);
        return deletedRole;
    }
}