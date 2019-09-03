import File from "../models/file";

class FileController {
  async store(req, res) {
    const { originalname: name, fieldname: path } = req.file;
    const file = await File.create({ name, path });
    return res.status(200).json(file);
  }
}

export default new FileController();
