import * as path from 'path';
import { diskStorage } from 'multer';
import * as mime from 'mime';
import { v4 as uuid } from 'uuid';

export function storageDir() {
  return path.join(__dirname, '../../storage');
}

export function multerStorage() {
  return diskStorage({
    destination: './storage',
    filename: (req, file, cb) =>
      cb(null, `${uuid()}.${(mime as any).extensions[file.mimetype]}`),
  });
}
