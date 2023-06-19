import user from "../model/user.model";

export const addeds = async (req, res) => {
    try {
        const { name, email, age, gender } = req.body;
        const userdata = new user({
            name: name,
            email: email,
            age: age,
            gender: gender
        })
        await userdata.save()

        if (userdata) {
            res.status(200).json({
                users: userdata,
                message: "student added",
            })
        }
        else {
            res.status(400).json({
                message: "something went wrong"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}



export const getdata = async (req, res) => {
    try {
        const userdata = await user.find()

        if (userdata) {
            res.status(200).json({
                users: userdata,
                // message: "student added",
            })
        }
        else {
            res.status(400).json({
                message: "something went wrong"
            })
        }

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const getdataid = async (req, res) => {
    try {
        let ids = req.params.id
        const userdata = await user.findOne({ _id: ids });

        if (userdata) {
            res.status(200).json({
                users: userdata,
                message: "student added",
            })
        }
        else {
            res.status(400).json({
                message: "something went wrong"
            })
        }

    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}


export const editdata = async (req, res) => {
    try {
        const id = req.params.id
        const { name, email, age, gender } = req.body;
        let userdata = await user.findOne({ _id: id })

        const data = await user.updateOne({ _id: id },
            {
                $set: {
                    name: name,
                    email: email,
                    age: age,
                    gender: gender
                }
            }
        )

        if (data) {
            res.status(200).json({
                users: data,
                data: userdata,
                message: "data updated"
            })
        }
        else {
            res.status(400).json({
                message: "data not updated"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

export const deletedata = async (req, res) => {
    try {
        const ids = req.params.id
        let userdata = await user.findOne({ _id: ids })

        const data = await user.deleteOne({ _id: ids })
        console.log(data)

        if (userdata) {
            res.status(200).json({
                users: userdata,
                message: "data deleted"
            })
        }
        else {
            res.status(400).json({
                message: "data not deleted"
            })
        }
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}