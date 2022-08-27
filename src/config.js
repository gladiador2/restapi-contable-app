import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "stock-sys-printcaz.cshm7qysnq4v.sa-east-1.rds.amazonaws.com",
    database: process.env.DATABASE || "asist_pruebas",
    user: process.env.USER || "admin",
    password: process.env.PASSWORD || "admin123456"
};
