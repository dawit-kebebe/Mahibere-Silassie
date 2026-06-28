"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseExplorerService = void 0;
class BaseExplorerService {
    // eslint-disable-next-line @typescript-eslint/ban-types
    getModules(modulesContainer, include) {
        const modules = [...modulesContainer.values()];
        if (!include?.length) {
            return modules;
        }
        return modules.filter((module) => include.includes(module.metatype));
    }
    flatMap(modules, callback) {
        const visitedModules = new Set();
        const unwrap = (module) => {
            // protection from circular recursion
            if (visitedModules.has(module)) {
                return [];
            }
            else {
                visitedModules.add(module);
            }
            const providers = [...module.providers.values()];
            const defined = providers
                .map((wrapper) => callback(wrapper, module))
                .filter((item) => Boolean(item));
            const imported = [];
            for (const m of module.imports) {
                imported.push(...unwrap(m));
            }
            return [...defined, ...imported];
        };
        return modules.flatMap((module) => unwrap(module)).filter(Boolean);
    }
}
exports.BaseExplorerService = BaseExplorerService;
//# sourceMappingURL=base-explorer.service.js.map