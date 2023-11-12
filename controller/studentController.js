
const { teacherModel, subjectModel, academyModel } = require('../database/database');



async function allTeachers() {
    return await teacherModel.find({});
};


async function allSubjects() {
    return await subjectModel.find({});
}


async function allAcademies() {
    return await academyModel.find({});
}



async function insertTeacher(teacher) {
    await teacherModel.save(teacher);
}


async function insertStudent(sub) {
    await subjectModel.save(sub);
}


async function insertAcademe(academy) {
    await academyModel.save(academy);
}


module.exports = {
    allTeachers,
    allSubjects,
    allAcademies,
    insertTeacher,
    insertStudent,
    insertAcademe
}