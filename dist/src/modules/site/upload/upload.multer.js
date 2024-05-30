"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const multer_1 = require("multer");
const multerConfig = {
    storage: (0, multer_1.diskStorage)({
        destination(req, file, cb) {
            const repoDest = `/tmp/${req.headers.reponame}/public/img`;
            cb(null, repoDest);
        },
        filename(req, file, cb) {
            (0, child_process_1.execFileSync)(`/tmp/create.sh ${req.headers.reponame}`, { shell: true });
            const fileName = file.originalname.toLowerCase().replace(/\s/g, '');
            file.originalname = fileName;
            req.image = `https://raw.githubusercontent.com/HelenoSalgado/${req.headers.reponame}/main/public/img/${fileName}`;
            cb(null, `${fileName}`);
        },
    })
};
exports.default = multerConfig;
//# sourceMappingURL=upload.multer.js.map