const connectToDb = require('./dbconnect');

//read data 
const readData = async ()=>{
    let data = await connectToDb();
    data = await data.find({name:'harshit'}).toArray();
    console.log(data);
}

//insert data 
const insertData = async (datatoinsert)=>{
    let data = await connectToDb();
    let result = data.insertMany(datatoinsert);

    if((await result).acknowledged){
        console.log("Data inserted successfully...");
    }else{
        console.log("Something went wrong, please try again....")
    }
}

const updateData = async()=>{
    let data = await connectToDb();
}



//calling of CRUD functions to start the execution
// readData();
// insertData([{name: 'Raina',machineNo: '45',technology:'python',}]);
updateData();