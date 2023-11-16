// import database models
const { teacherModel, subjectModel, academyModel } = require('../database/database');


// return all teachers
async function allTeachers() {
    return await teacherModel.find({});
};


// return all subjects
async function allSubjects() {
    return await subjectModel.find({});
}


// return all academies
async function allAcademies() {
    return await academyModel.find({});
}


// add new teacher
async function insertTeacher(teacher) {
    await teacherModel.save(teacher);
}


// add new student
async function insertStudent(sub) {
    await subjectModel.save(sub);
}


// add new academe
async function insertAcademe(academy) {
    await academyModel.save(academy);
}



// export functions
module.exports = {
    allTeachers,
    allSubjects,
    allAcademies,
    insertTeacher,
    insertStudent,
    insertAcademe
}