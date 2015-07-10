var mongoclean = {
    settings: {
        globalRemove: [
            'AccountKey',
            '__v',
            'UserId'
        ]
    }
};

/**
 * Adds a global clean key
 * @param key
 */
mongoclean.addGlobalKey = function (key) {
    mongoclean.settings.globalRemove.push(key);
};

/**
 * Cleans unwanted properties off of objects
 * @param entity
 * @param removeKeys
 * @returns {*}
 */
mongoclean.clean = function (entity, removeKeys) {
    var itemsToRemove = [];

    for (var i = 0; i < mongoclean.settings.globalRemove.length; i++) {
        itemsToRemove.push(mongoclean.settings.globalRemove[i]);
    }

    console.log(itemsToRemove);

    // Loop through any other removeKeys we have. If it's not an array throw an error telling the user so
    if (removeKeys !== undefined) {
        if (!Array.isArray(removeKeys)) {
            throw new Error("removeKeys must be an array");
        }

        for (var i = 0; i < removeKeys.length; i++) {
            itemsToRemove.push(removeKeys[i]);
        }
    }

    // If an array has been passed through, loop over it and remove it from each entity
    // Otherwise we remove properties from the entity
    // There's probably a nicer way to do this... surely...
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