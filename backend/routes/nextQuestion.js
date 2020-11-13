var mssql = require("mssql");
var config = require("../config");
var bodyParser = require("body-parser");

async function sumCorrectIncorrect(req, res) {
	// console.log(req.body);
	const questionAns = req.body.questionAns;
	const questionAnsSum = req.body.questionAnsSum;
	const questions = req.body.questions;
	const questionSum = req.body.questionSum;
	const sectionName = req.body.sectionName;
	const numQuestions = req.body.numQuestions;

	try {
		let pool = await mssql.connect(config);
		let result1 = await pool
			.request()
			.input("Questions", mssql.NVarChar, questionAns) // should keep history q&a ,
			.input("QuestionsSum", mssql.NVarChar, questionAnsSum) // should keep history q&a +
			.execute("dbo.SumCorrectIncorrectRow");

		let ThetaValue = result1.recordset[0].Theta;
		// console.log("ThetaValue: " + ThetaValue);

		let result2 = await pool
			.request()
			.input("RaschQuestions", mssql.NVarChar, questions) // questions ,
			.input("RaschQuestionsSum", mssql.NVarChar, questionSum) // questions +
			.input("theta", mssql.Decimal, ThetaValue)
			.execute("dbo.SumRaschThetaRow");

		// console.log(result2.recordset[0].result);
		let sumRaschVal = result2.recordset[0].result;
		// if (sumRaschVal > 6.25 || numQuestions >= 4) {
		// 	res.send({ nextQuestion: "" });
		// 	return;
		// }

		let result3 = await pool
			.request()
			.input("task", mssql.NVarChar, sectionName) // category name
			.input("prevQuestions", mssql.NVarChar, questions) // all of prev questions ,
			.input("bValue", mssql.Decimal, ThetaValue)
			.output("name", mssql.NChar) // output
			.execute("dbo.SelectNextQuestion");
		let nextQuestion = result3.output.name;
		console.log(nextQuestion.trim());
		res.send({ nextQuestion: nextQuestion.trim() });
	} catch (err) {
		console.log(err);
	}
}

// const sumRaschThetaRow = (req, res) => {
// 	const raschQuestions = req.headers.raschQuestions;
// 	const raschQuestionsSum = req.headers.raschQuestionsSum;
// 	const theta = returnValue;
// 	mssql.connect(config, function (err) {
// 		if (err) {
// 			return callback(err);
// 		} else var request = new mssql.Request();
// 		request.input("RaschQuestions", mssql.NVarChar, raschQuestions);
// 		request.input("RaschQuestionsSum", mssql.NVarChar, raschQuestionsSum);
// 		request.input("theta", mssql.Decimal, theta);

// 		request.execute("dbo.SumCorrectIncorrectRow", function (err, recordsets, returnValue) {
// 			if (err) {
// 				console.log(err);
// 			} else var str = JSON.stringify(recordsets);
// 			res.send(str); //send to front_end
// 			console.log(str);
// 			console.log("hhh");
// 			console.log(theta);
// 		});
// 	});
// };

// const selectNextQuestion = (req, res) => {
// 	const task = req.headers.task;
// 	const prevQuestion = req.headers.prevQuestion;
// 	const theta = req.headers.theta;
// 	mssql.connect(config, function (err) {
// 		if (err) {
// 			return callback(err);
// 		} else var request = new mssql.Request();
// 		request.input("task", mssql.NVarChar, task);
// 		request.input("prevQuestions", mssql.NVarChar, prevQuestion);
// 		request.input("bValue", mssql.Decimal, theta);
// 		request.output("name", mssql.NChar);

// 		request.execute("dbo.SelectNextQuestion", function (err, recordsets, returnValue) {
// 			if (err) {
// 				console.log(err);
// 			} else res.send(recordsets);
// 		});
// 	});
// };

module.exports = (app) => {
	// app.get("/sumRaschThetaRow", sumRaschThetaRow);
	// app.get("/selectNextQuestion", selectNextQuestion);
	app.put("/sumCorrectIncorrect", sumCorrectIncorrect);
};
