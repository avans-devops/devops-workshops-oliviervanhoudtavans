db.createUser(
    {
        user: "olivier",
        pwd: "olivier",
        roles:
        {   
            role: "readWrite",
            db: "Connections"
        }
    }
)