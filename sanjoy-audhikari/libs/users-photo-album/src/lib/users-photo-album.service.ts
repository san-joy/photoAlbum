import { Injectable } from '@nestjs/common';
import { albums, PrismaClient, users } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class UsersPhotoAlbumService {
    public getAllUsers(): Promise<users[]> {
        return prisma.users.findMany();
    }

    public getAllPhotoAlbums(userId: number): Promise<albums[]> {
        return prisma.albums.findMany({where: {
            userId: userId
        },
        include: {
            photos: true,
        }})
    }

    public createPhotoAlbum(data: { title: string, userId: number}): Promise<albums>{
        return prisma.albums.create({ data });
    }
}
