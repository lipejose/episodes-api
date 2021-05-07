import { getCustomRepository, Repository } from "typeorm";
import { Episodes } from "../entities/Episodes";
import { EpisodesRepository } from "../repositories/EpisodesRepository";


interface IEpisodesCreate {
    id: string;
    title: string;
    members: string;
    published_at: string;
    thumbnail: string;
    description: string;
    fileurl: string;
    fileduration: number;
}

export class EpisodesService {
    private episodesRepository: Repository<Episodes>;

    constructor() {
        this.episodesRepository = getCustomRepository(EpisodesRepository);
    }

    async create({ 
        id, 
        title, 
        members, 
        published_at, 
        thumbnail, 
        description, 
        fileurl, 
        fileduration 
    }: IEpisodesCreate) {
        const episodes = this.episodesRepository.create({
            id,
            title,
            members,
            published_at,
            thumbnail,
            description,
            fileurl,
            fileduration,
        })
        await this.episodesRepository.save(episodes);
        return episodes;
    }

    async listEpisodes() {
        const episodes = await this.episodesRepository.find();
        return episodes
    }

}