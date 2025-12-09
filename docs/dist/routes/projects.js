"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const projects_json_1 = __importDefault(require("../data/projects.json"));
const router = (0, express_1.Router)();
router.get("/", (_, res) => res.json(projects_json_1.default));
exports.default = router;
