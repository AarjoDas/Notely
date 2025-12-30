import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://minidasgamer_db_user:wbPFTMz3VSX6egIL@cluster0.mrurloi.mongodb.net/notes_db?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("MONGODB CONNECTED");
    } catch (error) {
        console.error("MONGODB CONNECTION ERROR:", error);
        process.exit(1);
    }
}