const userRepo = require("../repositories/user.repository");
const jwt = require("jsonwebtoken");

const login = async (params) => {
    try {
        let data = await userRepo.login(params);
        if (!data)
            return {
                status: 400,
                msg: "failed",
            };
        data = {
            _id: data._id,
            name: data.name,
            email: data.email,
            tasks: data.tasks,
        };

        const token = jwt.sign(data, process.env.JWT_SECRET);

        return {
            status: 200,
            msg: "success",
            token,
        };
    } catch (err) {
        console.log(err);
        return {
            status: 400,
            msg: "failed",
        };
    }
};
const signin = async (params) => {
    try {
        let data = await userRepo.signin(params);
        if (!data)
            return {
                status: 400,
                msg: "failed",
            };
        data = {
            _id: data._id,
            name: data.name,
            email: data.email,
            tasks: data.tasks,
        };

        const token = jwt.sign(data, process.env.JWT_SECRET);

        return {
            status: 200,
            msg: "success",
            token,
        };
    } catch (err) {
        return {
            status: 400,
            msg: "failed",
        };
    }
};
module.exports = { login, signin };
