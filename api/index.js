import express from 'express';

const router = express.Router();
//API CALL
router.get('/',(req,res)=>{
	//send json as its api
	res.send({data:[]}); 
});
export default router;

//CHANED SOMETHING HERE FOR TEST