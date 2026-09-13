const mongoose = require("mongoose");
const cvSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fname: {
            type: String,
            required: true
        },

        dob: {
            type: String,
            required: true
        },

        phone: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        skills: {
            type: [String],
            required: true
        },

        country: {
            type: String,
            required: true
        },

        state: {
            type: String
        },

        house: {
            type: String,
            required: true
        },

        education: {
            type: [String],
            required: true
        },

        class10: {
            type: String,
            required: true
        },

        class12: {
            type: String,
            required: true
        },

        field: {
            type: String,
            required: true
        },

        lang: {
            type: String,
            required: true
        },

        Marital: {
            type: String,
            required: true
        },

        experience: {
            company: String,
            years: String
        }
    },
    {
        timestamps: true
    }
);
