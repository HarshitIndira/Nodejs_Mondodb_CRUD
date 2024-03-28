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

// update data 
const updateData = async()=>{
    let data = await connectToDb();
    let result = data.updateOne(
        {name:'harshit'},{$set:{name:'Harhsit', position:'Jr Software Engineer'}}
    );

    if((await result).acknowledged){
        console.log("Data updates successfully");
    }else{
        console.log("something went wrong, please try again..")
    }
}


//delete data
const deleteData = async ()=>{
    let data = await connectToDb();
    let result = data.deleteOne(
        {name:'Raina'}
    );

    if((await result).acknowledged){
        console.log("data deleted successfully..")
    }    else{
        console.log("Something went wrong, please try again...")
    }
}


//calling of CRUD functions to start the execution
// readData();
// insertData([{name: 'Raina',machineNo: '45',technology:'python',}]);
// updateData();
// deleteData();