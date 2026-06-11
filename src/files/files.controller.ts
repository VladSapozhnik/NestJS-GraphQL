import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('avatar'))
  async create(@UploadedFile() avatar: Express.Multer.File) {
    // return this.filesService.create(createFileDto);

    const userId: string = '10';
    await this.filesService.uploadAvatar(avatar, userId);
    return {
      originalName: avatar.originalname,
    };
  }
}
