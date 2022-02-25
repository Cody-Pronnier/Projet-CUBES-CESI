import { getConnection } from 'typeorm';
import { UserEntity } from '../database/entities/UserEntity';
import { UserRepository } from '../repository/user.repository';


export class UserService {
    private userRepository: UserRepository;

    constructor(){
        this.userRepository = getConnection('projetCUBES').getCustomRepository(UserRepository);
    }

    public index = async () => {
        const users = await this.userRepository.find()
        
        return users;
    }

    public create = async (user : UserEntity) => {
        const newUser = await this.userRepository.save(user);
        return newUser;
    }
   
    public update = async(user: UserEntity, id: number) => {
        const updatedUser = await this.userRepository.update(id, user);
        return updatedUser;
    }

    public delete = async (id:number) => {
        const deletedUser = await this.userRepository.delete(id);
        return deletedUser;
    }

    
    public getUserById = async (id: number) => {
        const userById = await this.userRepository.findOne(id);
        if (!userById) {
            throw new Error("Erreur d'id d'utilisateur");;
          }
          return userById;
    }
}