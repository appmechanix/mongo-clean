var mongoclean = {
    settings: {
        globalRemove: [
            'AccountKey',
            '__v',
            'UserId'
        ]
    }
};

mongoclean.addGlobalKey = function (key) {
    mongoclean.settings.globalRemove.push(key);
};

mongoclean.clean = function (entity, removeKeys) {
    var itemsToRemove = mongoclean.settings.globalRemove;

    // Loop through any other removekeys we have. If it's not an array throw an error telling the user so
    if (removeKeys !== undefined) {
        if (!Array.isArray(removeKeys)) {
            throw new Error("removeKeys must be an array");
        }

        for (var i = 0; i < removeKeys.length; i++) {
            itemsToRemove.push(removeKeys[i]);
        }
    }

    if (Array.isArray(entity)) {
        for (var i = 0; i < entity.length; i++) {
            for (var item in entity[i]) {
                for (var z = 0; z < itemsToRemove.length; z++) {
                    if (item === itemsToRemove[z]) {
                        entity[i][item] = undefined;
                    }
                }
            }
        }
    } else {
        for (var item in entity) {
            for (var z = 0; z < itemsToRemove.length; z++) {
                if (item === itemsToRemove[z]) {
                    entity[item] = undefined;
                }
            }
        }
    }

    return entity;

};

module.exports = mongoclean;