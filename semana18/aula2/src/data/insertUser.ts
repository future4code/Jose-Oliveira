import { connection } from "../index"

export default async function insertUser(id: string, password: string, email: string) {
    await connection.raw(`
    insert into user (id,email,password) values(
        "${id}",
        "${email}",
        "${password}"
    )
    `)
}