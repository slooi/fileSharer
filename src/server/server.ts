import ws from "ws";
import express from "express";
import path from "path";
import fs from "fs/promises";
import { Fields, Files, IncomingForm } from "formidable";
const formidable = require("formidable");
const PORT = 8000;
const app = express();
const resourcePath = path.resolve(__dirname, "..", "..", "resources");

app.get("/", async (req, res) => {
	res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.post("/api/upload", (req, res, next) => {
	console.log("/api/ hit");

	const form: IncomingForm = new formidable.IncomingForm();
	// let form: IncomingForm = formidable({ multiples: true });
	form.parse(req, async (err: any, fields: Fields, files: Files) => {
		if (err) {
			console.log("THERE WAS ERROR!");
			next(err);
			return;
		}

		const oldPath: string = files.someExpressFiles.path;
		const newPath: string = __dirname + "/" + files.someExpressFiles.name;

		try {
			// raw data
			const rawData = await fs.readFile(oldPath);
			await fs.writeFile(newPath, rawData);
			// fs.writeFile(__dirname,files)
			// console.log(fields)
			res.send("Successfully uploaded");
		} catch (err) {
			console.log("You've got an error!");
		}
	});
});

app.post("/download/", (req, res) => {
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

const getFileName = async (): Promise<Error | string> => {
	try {
		const files = await fs.readdir(resourcePath);
		if (!files.length) throw new Error("no files");
		return files[0];
	} catch (err) {
		throw new Error(err);
	}
};

function getFilePath(filename: string): string {
	return path.resolve(__dirname, "..", "..", "resources", filename);
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

const server = app.listen(PORT);
