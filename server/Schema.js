import mongoose, { Schema, mongo } from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    usertype:{
        type: String,
        required: true
    }
})

const freelancerSchema = mongoose.Schema({
    userId: String,
    skills: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        default: ""
    },
    currentProjects: {
        type: Array,
        default: []
    },
    completedProjects: {
        type: Array,
        default: []
    },
    applications: {
        type: Array,
        default: []
    },
    funds: {
        type: Number,
        default: 0
    },
})


const projectSchema = mongoose.Schema({
    clientId: String,
    clientName: String,
    clientEmail: String,
    title: String,
    description: String,
    budget: Number,
    skills: {
        type: Array,
        default: []
    },
    bids: {
        type: Array,
        default: []
    },
    bidAmounts: {
        type: Array,
        default: []
    },
    postedDate: String,
    status: {
        type: String,
        default: "Available"
    },
    freelancerId: String,
    freelancerName: String,
    deadline: String,
    submission: {
        type: Boolean,
        default: false
    },
    submissionAccepted: {
        type: Boolean,
        default: false
    },
    projectLink: {
        type: String,
        default: ""
    },
    manualLink: {
        type: String,
        default: ""
    },
    submissionDescription: {
        type: String,
        default: ""
    },
})


const applicationSchema = mongoose.Schema({

    projectId: String,
    clientId: String,
    clientName: String,
    clientEmail: String,
    freelancerId: String,
    freelancerName: String,
    freelancerEmail: String,
    freelancerSkills: Array,
    title: String,
    description: String,
    budget: Number,
    requiredSkills: Array,
    proposal: String,
    bidAmount: Number,
    estimatedTime: Number,
    status: {
        type: String,
        default: "Pending"
    }
})

const chatSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    messages: {
        type: Array,
        default: []
    }
})

export const User = mongoose.model('users', userSchema);
export const Freelancer = mongoose.model('freelancer', freelancerSchema);
export const Project = mongoose.model('projects', projectSchema);
export const Application = mongoose.model('applications', applicationSchema);
export const Chat = mongoose.model('chats', chatSchema);
