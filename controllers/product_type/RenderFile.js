const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

url = process.env.MONGODB_URI;
const connect = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfs;
connect.once("open", () => {
  gfs = new mongoose.mongo.GridFSBucket(connect.db, {
    bucketName: "storage",
  });
});

const RenderFile = async (req, res) => {
  gfs.find({ filename: req.params.filename }).toArray((err, files) => {
    if (err) throw new Error("some error occured in rendering image from gridfs!")
    if (!files[0] || files.length === 0) {
      return res.status(200).json({
        success: false,
        message: "No such image available",
      });
    }

    gfs.openDownloadStreamByName(req.params.filename).pipe(res);
  });
};

module.exports = RenderFile;
