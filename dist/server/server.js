"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var promises_1 = __importDefault(require("fs/promises"));
// import * as formidable from "formidable";
var formidable = require("formidable");
var PORT = 8000;
var app = express_1.default();
var resourcePath = path_1.default.resolve(__dirname, "..", "..", "resources");
app.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.sendFile(path_1.default.resolve(__dirname, "..", "public", "index.html"));
        return [2 /*return*/];
    });
}); });
app.post("/api/", function (req, res, next) {
    console.log("uploads");
    console.log("uploads");
    console.log("uploads");
    var form;
    try {
        form = formidable({ multiples: false });
    }
    catch (err) {
        console.log("11111111111111111111111111111111111111111");
        console.log(err);
    }
    // const form = formidable({ multiples: true });
    // const form = formidable;
    try {
        console.log("parsing!");
        form.parse(req, function (err, fields, files) {
            if (err) {
                console.log("THERE WAS ERROR!");
                next(err);
                return;
            }
            console.log("RES JSON!");
            res.json({ fields: fields, files: files });
        });
    }
    catch (err) {
        console.log("222222222222222222222222222222222222222");
        console.log(err);
    }
});
app.post("/download/", function (req, res) {
    console.log(req);
});
// app.get("/a", (req, res) => {
// 	console.log(path.join("pie", "..", "server/"));
// 	console.log(path.resolve(__dirname, "..", "server/"));
// 	console.log("/a");
// 	res.send(`/a`);
// });
// app.get("/:a", (req, res) => {
// 	console.log(1);
// 	res.send(`1,${req.params.a}`);
// });
// app.get("/:a/:b", (req, res) => {
// 	console.log(2);
// 	res.send(`2,${req.params.a},${req.params.b}`);
// });
// app.get("/a/b", (req, res) => {
// 	console.log("last2");
// 	res.send(`last2`);
// });
// app.get("a/b/c", (req, res) => {
// 	console.log("last");
// 	res.send(`last`);
// });
// app.get("/:filename", async (req, res) => {
// 	console.log("NICE");
// 	console.log(req.params);
// 	const reqPath = path.resolve(__dirname, req.params.filename);
// 	console.log(reqPath);
// 	// If file with that name exist, send. Else send error text
// 	try {
// 		const exists = await fs.access(reqPath);
// 		res.status(200);
// 		res.download(path.resolve(__dirname, req.params.filename));
// 	} catch (err) {
// 		res.status(404);
// 		res.send("Something unexpected occurred. File may not exist");
// 		// res.sendStatus(404);
// 	}
// });
// app.get("/", async (req, res) => {
// 	console.log(path.resolve(__dirname, "..", "server", "..", "server"));
// 	console.log(path.resolve(__dirname, "..", "public"));
// 	console.log(req.query.filename);
// 	if (Object.keys(req.query).length === 0) {
// 		return res.sendFile(
// 			path.resolve(__dirname, "..", "public", "index.html")
// 		);
// 	}
// 	try {
// 		if (typeof req.query.filename === "string") {
// 			const reqName = req.query.filename;
// 			const reqPath = path.resolve(__dirname, reqName);
// 			console.log(reqPath);
// 			// If file with that name exist, send. Else send error text
// 			await fs.access(reqPath);
// 			res.status(200);
// 			res.download(path.resolve(__dirname, reqName));
// 		} else {
// 			throw new Error("incorrect filename or file does not exist");
// 		}
// 	} catch (err) {
// 		res.status(404);
// 		res.send(`Something unexpected occurred. ${err}`);
// 		// res.sendStatus(404);
// 	}
// });
var getFileName = function () { return __awaiter(void 0, void 0, void 0, function () {
    var files, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, promises_1.default.readdir(resourcePath)];
            case 1:
                files = _a.sent();
                if (!files.length)
                    throw new Error("no files");
                return [2 /*return*/, files[0]];
            case 2:
                err_1 = _a.sent();
                throw new Error(err_1);
            case 3: return [2 /*return*/];
        }
    });
}); };
function getFilePath(filename) {
    return path_1.default.resolve(__dirname, "..", "..", "resources", filename);
}
// function getFileName() {
// 	// Returns the first
// 	return new Promise((resolve, reject) => {
// 		fs.readdir(resourcePath, (err, file) => {
// 			if (err) {
// 				reject(err);
// 			} else if (file.length === 0) {
// 				reject("NO FILE!!!");
// 			} else {
// 				resolve(file[0]);
// 			}
// 		});
// 	});
// }
var server = app.listen(PORT);
//# sourceMappingURL=server.js.map