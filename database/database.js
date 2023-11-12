const dotenv = require('dotenv').config();
const mongoose = require('mongoose');


const databaseConnection = () => mongoose.connect(process.env.DB)
    .then(res => console.log('database is connected'))
    .catch(err => console.log(err));



const teacherSchema = mongoose.Schema({
    name: String,
    age: Number,
    years_of_teaching: String,
});

const subjectSchema = mongoose.Schema({
    sub_name: String,
    sub_teacher: String,
    sub_price: String,
    sub_time: String
});

const academySchema = mongoose.Schema({
    aca_name: String,
    aca_place: String,
    aca_aval_sub: String,
    aca_aval_teachers: String
});


const teacherModel = mongoose.model('teachers', teacherSchema);
const subjectModel = mongoose.model('subjects', subjectSchema);
const academyModel = mongoose.model('academy', academySchema);


module.exports = {
    teacherModel,
    subjectModel,
    academyModel,
    databaseConnection
}