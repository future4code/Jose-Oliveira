import { connection } from "../index"

export default async function insertUser(id: string, password: string, email: string) {
    await connection.raw(`
    insert into user values(
        "${id}",
        "${email}",
        "${password}"
    )
    `)
}