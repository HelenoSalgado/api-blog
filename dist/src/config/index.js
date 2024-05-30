"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.git = exports.Plan = exports.secretUser = exports.Role = void 0;
var Role;
(function (Role) {
    Role["USER"] = "USER";
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role["STORE"] = "STORE";
})(Role = exports.Role || (exports.Role = {}));
exports.secretUser = process.env.SECRET_USER;
exports.Plan = {
    basic: {
        name: "Basic",
        currentPrice: 0,
        limitUsers: 3,
        softwareId: 1,
        active: true
    }
};
function repoName() {
    let array = ('https://github.com/HelenoSalgado/rfconsultoria.git').split('.');
    let name = array[array.length - 2].split('/')[2];
    return name;
}
exports.git = {
    repoName: repoName(),
    repoUrl: 'https://github.com/HelenoSalgado/rfconsultoria.git'
};
//# sourceMappingURL=index.js.map