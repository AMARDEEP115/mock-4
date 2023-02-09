const json=require("json-server");
const app=json.create();
const router=json.router("db.json");
const middleware=json.defaults();

app.use(middleware);

app.use("/",router);

app.listen(8080,()=>{
    console.log("json-server is running");
});