// express is a node js framework
// router is for url endpoints 
const express = require('express');
const router = express.Router();

// import all functions from controller
const { allTeachers, allSubjects, allAcademies, insertAcademe, insertStudent, insertTeacher } = require('../controller/studentController');



// GET that return all data in the database
router.get('/', async function(req, res) {
    
    const data = {
        teachers: await allTeachers(),
        subjects: await allSubjects(),
        academies: await allAcademies()
    }

    return await res.status(200).send(data);

});


// POST to add new teacher 
router.post('/teacher', async function(req, res) {
    const teacher = req.body
    
    await insertTeacher(teacher)
        .then(res => {
            return res.status(200).send('done');
        })
        .catch(err => {
            return res.status(400).send(err);
        });
});


// POST for adding new subjects
router.post('/subject', async function(req, res) {
    
    const subject = req.body
    
    await insertStudent(subject)
        .then(res => {
            return res.status(200).send('done');
        })
        .catch(err => {
            return res.status(400).send(err);
        });

});


// for adding new academu
router.post('/academy', async function(req, res) {
    
    const academy = req.body
    
    await insertAcademe(academy)
        .then(res => {
            return res.status(200).send('done');
        })
        .catch(err => {
            return res.status(400).send(err);
        });

});



// export router
module.exports = {
    router
}