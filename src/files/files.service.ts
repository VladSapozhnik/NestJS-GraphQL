import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { saveFile } from './utils/save-file.util';

@Injectable()
export class FilesService {
  create(createFileDto: CreateFileDto) {
    return 'This action adds a new file';
  }

  async uploadAvatar(avatar: Express.Multer.File, userId: string) {
    return saveFile(avatar, userId);
  }
}
