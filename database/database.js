// dotenv for using env vars
// mongoose is ODM
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');



// connect to database
// mongodb+srv://admin:<password>@cluster0.bbpc47o.mongodb.net/?retryWrites=true&w=majority
const databaseConnection = () => mongoose.connect(process.env.DB)
    .then(res => console.log('database is connected'))
    .catch(err => console.log(err));


// schema of teachers
const teacherSchema = mongoose.Schema({
    name: String,
    age: Number,
    years_of_teaching: String,
});


// schema of subjects
const subjectSchema = mongoose.Schema({
    sub_name: String,
    sub_teacher: String,
    sub_price: String,
    sub_time: String
});


// schema of academy
const academySchema = mongoose.Schema({
    aca_name: String,
    aca_place: String,
    aca_aval_sub: String,
    aca_aval_teachers: String
});



// make models for each schema
const teacherModel = mongoose.model('teachers', teacherSchema);
const subjectModel = mongoose.model('subjects', subjectSchema);
const academyModel = mongoose.model('academy', academySchema);



// export models 
module.exports = {
    teacherModel,
    subjectModel,
    academyModel,
    databaseConnection
}