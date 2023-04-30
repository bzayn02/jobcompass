import mongoose from 'mongoose';

export const dbConnection = () => {
    try {
        const connString =
            'mongodb+srv://vulpeshprajan:dB10Af0F8ss62MMI@cluster0.nozxmew.mongodb.net/?retryWrites=true&w=majority';
        const con = mongoose.connect(connString);
        con && console.log('Connected to MongoDB.');
    } catch (error) {
        console.log(error);
    }
};
