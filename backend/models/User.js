import bcrypt from 'bcryptjs'
import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    lastName: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String, 
        required: true,
    },
    email: {
        type: String, 
        required: true, 
        unique: true,
    },
    password: {
        type: String, 
        required: true,
    },
    recipes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe'
    }],
    isAdmin: {
        type: Boolean, 
        required: true,
        default: false,
    },
}, {
    timestamps: true,
})

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// Apply a mongoose middleware before saving the data 
userSchema.pre('save', async function(next) {
    
    //  Check if the password is modified (in case of a user update)
    //  We don't want to run the middleware, and generate a new hashed password  
    if(!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User