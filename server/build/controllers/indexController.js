"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'This is an API Rest Full' });
    }
}
exports.indexController = new IndexController();
