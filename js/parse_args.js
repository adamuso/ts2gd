"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printHelp = exports.parseArgs = void 0;
const parseArgs = () => {
    const args = process.argv.slice(2);
    const flags = {
        help: false,
        buildLibraries: false,
        init: false,
    };
    for (const arg of args) {
        if (arg.trim().length === 0) {
            continue;
        }
        if (arg === "--help") {
            flags.help = true;
        }
        else if (arg === "--buildLibraries") {
            flags.buildLibraries = true;
        }
        else if (arg === "--init") {
            flags.init = true;
        }
        else {
            flags.help = true;
        }
    }
    return flags;
};
exports.parseArgs = parseArgs;
const printHelp = () => {
    console.info();
    console.info("Arguments:");
    console.info("--buildLibraries    Force ts2gd to regenerate the TypeScript definitions for Godot.");
    console.info("--init              Initialize a ts2gd project here.");
    console.info("--help              Print this help.");
    console.info();
    console.info();
    console.info("See README on GitHub for much more detail: https://github.com/johnfn/ts2gd");
};
exports.printHelp = printHelp;
//# sourceMappingURL=parse_args.js.map