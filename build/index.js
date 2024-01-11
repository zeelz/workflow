"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// app.use(express.static('frontend'))
app.use(express_1.default.json());
const PORT = 3366;
app.get("/", (req, res) => {
    return res.status(200).send({ "msg": "canada 2024" });
});
app.listen(PORT, () => console.log(`Running at http://localhost:${PORT}`));
