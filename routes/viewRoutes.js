const express = require("express");
const path = require("path");
const viewController = require("../controller/viewController");
// const studentController = require("../controller/studentController");
const cookieParser = require("cookie-parser");
const authFile = require("../middleware/auth");
const hbs = require("hbs");
const app = express();

app.use(cookieParser());

app.set("view engine", "hbs");
const viewPath = path.join(__dirname, "../view");
app.set("views", viewPath);

hbs.registerHelper('eq', function(v1, v2) {
  return v1 === v2;
});

app.use(express.static("images"));

app.use(express.static(path.join(__dirname, "../Images")));

app.get("/register", authFile.validateToken, viewController.register);

app.get("/announcement", authFile.validateToken, viewController.announcement);

app.get("/studentProfileEdit/:userId", authFile.sValidateToken, viewController.studentProfileEdit);

app.get("/studentAddressUpdate/:userId", authFile.sValidateToken, viewController.studentAddressUpdate);

app.get("/addressUpdateReq", authFile.validateToken, viewController.addressUpdateReq);

app.get("/studentProfileTuEdit/:userId", authFile.sValidateToken, viewController.studentProfileTuEdit);

app.get("/studentProfileExEdit/:userId", authFile.sValidateToken, viewController.studentProfileExEdit);

app.get("/reviewRequest", authFile.validateToken, viewController.reviewRequest);

app.get("/reviewRequestTu", authFile.validateToken, viewController.reviewRequestTu);

app.get("/reviewRequestEx", authFile.validateToken, viewController.reviewRequestEx);

app.get("/paymentAlert", authFile.validateToken, viewController.paymentAlert);

app.get("/commonAnnouncement",authFile.validateToken,viewController.commonAnnouncement);

app.get("/updateDueDatesForAll", authFile.validateToken, viewController.updateDueDatesForAll);

app.get("/messages", authFile.validateToken, viewController.message);

app.get("/studentList", authFile.validateToken, viewController.studentList);

app.get("/alumniList", authFile.validateToken, viewController.alumniList);

app.get(
  "/studentEdit/:userId",
  authFile.validateToken,
  viewController.studentEdit
);

// app.get('/studentList/firstYear', viewController.firstYearStudentList);

// app.get('/studentList/secondYear', viewController.secondYearStudentList);

app.get("/upload", (req, res) => {
  res.render("imageUpload");
});
app.get("/dashboard", authFile.validateToken, viewController.dashboard);

app.get("/studentProfile", authFile.sValidateToken, viewController.getStudentDetails);

app.get("/feeRegister", authFile.validateToken, viewController.feeRegister);

app.get("/sessionExpired", (req, res) => {
  res.render("sessionExpired");
});
app.get("/feeList", authFile.validateToken, viewController.studentFeeList);

app.get("/subjectList", authFile.validateToken, viewController.subjectList);

app.get("/subject", authFile.validateToken, viewController.subject);

app.get("/moveStudentsPage", authFile.validateToken, viewController.moveStudents);

app.get("/examFeeList", authFile.validateToken, viewController.examFeeList);

app.get("/feeEdit/:userId", authFile.validateToken, viewController.feeEdit);

app.get("/examFeeEdit/:userId", authFile.validateToken, viewController.examFeeEdit);

app.get("/gallery", authFile.validateToken, viewController.gallery);

// app.get('/downloadFirstYrTuFeePDF', viewController.downloadFirstYrTuFeePDF);

// app.get('/downloadSecondYrTuFeePDF', viewController.downloadSecondYrTuFeePDF);

// app.get('/downloadFirstYrExFeePDF', viewController.downloadFirstYrExFeePDF);

// app.get('/downloadSecondYrExFeePDF', viewController.downloadSecondYrExFeePDF);

app.post('/alumniStatus', viewController.alumniStatus);


module.exports = app;
