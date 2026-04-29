const Animepahe = require('../scrapers/animepahe');
const Config = require('../utils/config');
const { CustomError } = require('../middleware/errorHandler');

class ResolveModel {
    static async resolveStaticId(staticId) {
        if (!staticId) throw new CustomError('Static ID is required', 400);

        const session = await Animepahe.resolveStaticId(staticId);

        return {
            id: staticId,
            session,
            link: Config.getUrl('animeInfo', session),
        };
    }
}

module.exports = ResolveModel;
