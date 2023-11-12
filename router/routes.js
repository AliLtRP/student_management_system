const express = require('express');
const router = express.Router();
const { allTeachers, allSubjects, allAcademies, insertAcademe, insertStudent, insertTeacher } = require('../controller/studentController');



router.get('/', async function(req, res) {
    
    const data = {
        teachers: await allTeachers(),
        subjects: await allSubjects(),
        academies: await allAcademies()
    }

    return await res.status(200).send(data);

});


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



module.exports = {
    router
}