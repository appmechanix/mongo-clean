exports.clean = function (entity) {
    if (Array.isArray(entity)) {
        for (var i = 0; i < entity.length; i++) {
            entity[i].AccountKey = undefined;
            entity[i].__v = undefined;
            entity[i].UserId = undefined;
        }
    } else {
        entity.AccountKey = undefined;
        entity.__v = undefined;
        entity.UserId = undefined;
    }

    return entity;
};

