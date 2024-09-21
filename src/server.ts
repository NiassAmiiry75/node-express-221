import app from "./app";
import dotenv from "dotenv";
dotenv.config
const data = JSON.stringify({ clientId: 1, password: "your_password" });

const port = process.env.PORT ?? 3001;
app.listen(port,() => { 
    console.log(`Server is running on port ${port}`); 
});
