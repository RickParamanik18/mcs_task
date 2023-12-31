const users = require("../models/user.model");

const login = async (params) => {
    try {
        const { email, password } = params;
        const result = await users.findOne({ email });
        return result && result.password === password ? result : null;
    } catch (err) {
        return null;
    }
};
const signin = async (params) => {
    try {
        const { name, email, password } = params;

        let result = await users.findOne({ email });
        if (result) return null;

        const newUser = new users({
            name,
            email,
            password,
        });

        result = await newUser.save();
        return result;
    } catch (err) {
        return null;
    }
};
const updateTasks = async (params) => {
    try {
        const { userData, tasks } = params;
        await users.updateOne(
            { email: userData.email },
            {
                $set: { tasks },
            }
        );
        const result = await users.findOne({ email: userData.email });
        return result;
    } catch (err) {
        return null;
    }
};
module.exports = {
    login,
    signin,
    updateTasks,
};
