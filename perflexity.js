// // // console.log(Hello prflexity);
// // console.log('Hello prflexity');
// // window.onload = function () {
// //     const popup = document.getElementById(popup);
// //     const closeBtn = document.getElementById(closeBtn);

// //     // Show the popup with animation
// //     popup.classList.add(show);

// //     // Hide the popup when OK is clicked
// //     closeBtn.addEventListener(click, function () {
// //         popup.classList.remove(show);
// //     });
// // };


// function perflexity(name) {
//     const len = name.length;
//     console.log("Length of the string is: ", len);
//     // Find the frequensic charactter of a stiring 
//     let findedString;

//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (name[i] == name[j]) {
//                 findedString = name[i];
//             }
//         }
//         if (name[i] == name[i + 1]) {
//             findedString = name[i];
//         }

//     }
//     console.log("Frequent character is: ", findedString);
// }


// perflexity("pryflexity");
const express = require('express');
const prisma = require('../config/prismaClient'); // ✅ import prisma

const router = express.Router();

// ✅ Create a survey
router.post('/', async (req, res) => {
    try {
        const { title, questions } = req.body;

        if (!title || !questions) {
            return res.status(400).json({ error: 'Title and questions are required' });
        }

        const newSurvey = await prisma.survey.create({
            data: { title, questions },
        });

        res.status(201).json({ message: 'Survey created successfully', newSurvey });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get all surveys
router.get('/', async (req, res) => {
    try {
        const surveys = await prisma.survey.findMany();

        if (!surveys.length) {
            return res.status(404).json({ error: 'No surveys found' });
        }

        res.status(200).json(surveys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Get survey by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const survey = await prisma.survey.findUnique({
            where: { id: Number(id) },
        });

        if (!survey) {
            return res.status(404).json({ error: 'Survey not found' });
        }

        res.status(200).json(survey);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update survey
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, questions } = req.body;

        if (!title || !questions) {
            return res.status(400).json({ error: 'Title and questions are required' });
        }

        const updatedSurvey = await prisma.survey.update({
            where: { id: Number(id) },
            data: { title, questions },
        });

        res.status(200).json({ message: 'Survey updated successfully', updatedSurvey });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Delete survey
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.survey.delete({
            where: { id: Number(id) },
        });

        res.status(200).json({ message: 'Survey deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


