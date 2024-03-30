const mongoose = require("mongoose");

const DramaSchema = new mongoose.Schema(
    //     Name 
    // Duration 
    // Date
    // Time
    // Category 
    // Cover photo
    {
        Name: {
            type: String,
            require: true,
        },
        Duration: {
            type: String,
            require: true,
        },
        Date: {
            type: Date,
            require: true,
            default: Date.now()
        },
        Time: {
            type: String,
            require: true,
        },
        Category: {
            type: String,
            require: true,
        }
    }
);

module.exports = mongoose.model("Todo", DramaSchema);