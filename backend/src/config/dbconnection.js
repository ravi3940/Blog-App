import  mongoose  from  "mongoose"

const   dbConnection  =  async()=>{

    try {
        const  db =  await  mongoose.connect(process.env.MONGODB_URI);
        console.log("database  connection  succefully")
    } catch (error) {
        console.error(error)
        process.exit(1);
    }
}

export  default  dbConnection;