
const Todo = require("../models/Todo");



exports.createTodo = async (req, res) => {
    try {

        const { Name, Duration, Date, Time, Category } = req.body;
        const response = await Todo.create({ Name, Duration, Date, Time, Category });

        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully'
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
            .json({
                success: false,
                data: "internal server error",
                message: err.message,
            })
    }
}