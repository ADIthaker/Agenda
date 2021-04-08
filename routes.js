const router = require("express").Router(); 
const {postSchedule,getSchedules,deleteSchedule,editSchedule} = require("./controllers/schedule");
router.get("/schedule",getSchedules);
router.post("/schedule",postSchedule);
router.put("/schedule",editSchedule);
router.delete("/schedule/:id",deleteSchedule);

module.exports = router;

