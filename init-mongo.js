db.createUser(
    {
        user: "root",
        pwd: "rootPassXXX",
        roles:
            [
                {
                    role: "readWrite",
                    db: "Connections"
                }
            ]

    }
)