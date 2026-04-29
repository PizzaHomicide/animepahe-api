const ResolveModel = require('../models/resolveModel');
const { CustomError } = require('../middleware/errorHandler');

class ResolveController {
    static async resolve(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) throw new CustomError('id is required', 400);

            const result = await ResolveModel.resolveStaticId(id);
            return res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ResolveController;
