"use strict";
/**
 * This file contains the source code importing and re-exporting the
 * HyperFiler, Resource, and dependencies code.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHyperFilerDependencies = exports.ResourceType = exports.Resource = exports.HyperFilerPrebuiltOptions = exports.HyperFiler = void 0;
const hyperfiler_1 = require("./hyperfiler");
Object.defineProperty(exports, "HyperFiler", { enumerable: true, get: function () { return hyperfiler_1.HyperFiler; } });
const hyperfiler_options_1 = require("./options/hyperfiler-options");
Object.defineProperty(exports, "HyperFilerPrebuiltOptions", { enumerable: true, get: function () { return hyperfiler_options_1.HyperFilerPrebuiltOptions; } });
const resource_1 = require("./resource");
Object.defineProperty(exports, "Resource", { enumerable: true, get: function () { return resource_1.Resource; } });
Object.defineProperty(exports, "ResourceType", { enumerable: true, get: function () { return resource_1.ResourceType; } });
const dependencies_1 = require("./dependencies");
Object.defineProperty(exports, "checkHyperFilerDependencies", { enumerable: true, get: function () { return dependencies_1.checkHyperFilerDependencies; } });
//# sourceMappingURL=index.js.map