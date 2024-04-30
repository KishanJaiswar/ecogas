const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Connection
async function main() {
    await mongoose.connect('mongodb+srv://kisanjaiswa123:IqHWXkzSmeSsi0oV@cluster0.xwa72gq.mongodb.net/freelanceProjectTest').then(() => {
        console.log('Connected to atlas')
    });
    // Use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}
main().catch(err => console.log(err));

// Schema
const contactSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    mail: { type: String, required: true },
    phone: { type: String, required: true },
    service: {
        type: String,
        required: true,
        enum: ['CCTV-Installation', 'FIRE-Equipment', 'GAS-Pipeline', 'ROAD-Construction']
    }
});

// Modal
const ContactForm = mongoose.model('ContactForm', contactSchema);

// Middlewares
app.use(cors());
app.use(express.json());

// APIs
app.post('/contactFormForFreelanceProjhect', async (req, res) => {
    try {
        const formData = req.body;
        await ContactForm.create({
            fname: 'Kishan',
            lname: 'jaiswar',
            mail: 'jaiswarkishan78@gmail.com',
            phone: '9967580692',
            service: 'GAS-Pipeline'
        });
        res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
        console.log('errors', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// app.use(express.static("./frontend/build"));
// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
// });

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
