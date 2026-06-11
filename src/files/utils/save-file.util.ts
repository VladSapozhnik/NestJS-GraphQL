import { join } from 'path';
import fs from 'fs/promises';

const ALLOWED_EXTENSIONS = new Set(['jpg', 'jpeg', 'png', 'webp', 'svg']);

export async function saveFile(
  file: Express.Multer.File,
  userId: string,
): Promise<string> {
  try {
    const extensionAvatar: string | undefined = file.originalname
      .split('.')
      .pop()
      ?.toLocaleLowerCase();

    if (!extensionAvatar || !ALLOWED_EXTENSIONS.has(extensionAvatar)) {
      throw new Error('Invalid extension image');
    }

    const distRoot: string = join(process.cwd(), 'dist');
    const uploadPath: string = join(
      distRoot,
      'uploads',
      'users',
      userId,
      'avatar',
    );

    await fs.mkdir(uploadPath, { recursive: true });

    const fileName: string = `${userId}.${extensionAvatar}`;

    const avatarPath: string = join(uploadPath, fileName);

    await fs.writeFile(avatarPath, file.buffer);

    console.log(avatarPath);

    return avatarPath;
  } catch (error) {
    console.error(error);
    throw new Error(`AVATAR: ${error}`);
  }
}
