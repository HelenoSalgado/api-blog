import { execFileSync } from "child_process";
import { diskStorage } from "multer";
import { Req } from "src/types/express";

const multerConfig = {

    storage: diskStorage({

        destination(req, file, cb){
            const repoDest = `/tmp/${req.headers.reponame}/public/img`;
            cb(null, repoDest);
        },

        filename(req: Req, file, cb) {

            execFileSync(`/tmp/create.sh ${req.headers.reponame}`, {shell: true});

            const fileName = file.originalname.toLowerCase().replace(/\s/g, '');

            file.originalname = fileName;

            req.image = `https://raw.githubusercontent.com/HelenoSalgado/${req.headers.reponame}/main/public/img/${fileName}`;

            cb(null, `${fileName}`);

        },
    })
} 

export default multerConfig;