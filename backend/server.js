let express = require("express");
let app = express();
let cors = require("cors");
app.use(cors());
app.use(express.json());
let dotenv = require("dotenv");
dotenv.config();
// Email Configuration
let nodemailer = require("nodemailer"); // NodeMailer For Email Configuration
// console.log(process.env.EMAIL_USER);
// console.log(process.env.EMAIL_PASS)
// For Creating The Transport
const transporter = nodemailer.createTransport({
    service:"gmail",
    host:"smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});
// Creating The post Route To Send Email
app.post("/contact", async(req, res) => {
    try {
        let { name, email, description } = req.body;
        await transporter.sendMail({
            from:email,
            to:process.env.EMAIL_USER,
            replyTo:email,
            subject: `New Message From ${name}`,
            text: description
        });
        res.status(200).json({
            message:"Email Sent Successfully"
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message:"Email Not Sent Try Again"
        });
    }
})
app.listen(3000, () => {
    console.log("Server Is Running...")
})