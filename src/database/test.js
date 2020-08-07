const Database = require('./db');
const createProffy = require('./createProffy');


Database.then(async (db) => {
    
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "891223212",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]


    // create data
    
    // await createProffy(db, { proffyValue, classValue, classScheduleValues })


    // query data

    //proffy
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);

    //query data from a proffy's class along with his data
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys);


    // the schedule  proffy works, for example, is 8 Am - 6Pm
    // the schedule from time_from (8h) needs to be before or equal to solicited schedule
    // the time_to must be after
    
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "620"
    `)

    // console.log(selectClassesSchedules);
})