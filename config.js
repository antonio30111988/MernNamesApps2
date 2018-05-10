//console.log("Test");
//||
const env=process.env;

export const nodeEnv=env.NODE_ENV || 'development'
export const logSomething=function(text){
	console.log("This is a fucntion!!! Say something: "+text);
}
export default {
	port: env.PORT || 8080
};