import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User";
import { Student } from "./entity/Student";

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "grupo_a",
    synchronize: true,
    logging: false,
    entities: [User, Student],
    migrations: [],
    subscribers: [],
});

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error));

export default AppDataSource;