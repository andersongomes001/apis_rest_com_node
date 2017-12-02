module.exports = function (app) {
    return {
        findAll : function (params, callback) {
            return callback([
                {titulo: "fazer compras"},
                {titulo: "Aprende nodejs"}
            ]);
        }
    }
}