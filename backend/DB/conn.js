import mongoose from 'mongoose';

const connDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{dbName : 'MERN_STACK_BLOGING_APP'})
        console.log('DB connected')
    } catch (error) {
        console.log(error)
    }
}
export default connDB