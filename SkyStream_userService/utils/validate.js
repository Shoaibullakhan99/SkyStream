const validator = require('validator');
const isEmpty = require('is-empty');

exports.validateRegisterInput = (data) => {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.role = !isEmpty(data.role) ? data.role : '';

    if(validator.isEmpty(data.username)){
        errors.username = 'Name field is requried';
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'Email field is required';
    }else if (!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'Password field is requried';
    }else if (!validator.isLength(data.password, {min:6, max:30})){
        errors.password = 'Password must be at least 6 charectors long';
    }
    if(validator.isEmpty(data.role)){
        errors.role = 'Role is requried';
    }else if(!['passenger', 'staff', 'admin'].includes(data.role)){
        errors.role = 'Role is invalid';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

exports.validateLoginInput =  (data) => {
    let errors = {}

    console.log(data)

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if(validator.isEmpty(data.email)){
        errors.email = 'Email flied is required';
    } else if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }

    if(validator.isEmpty(data.password)){
        errors.password = 'Password filed is requried';
    }else if(!validator.isLength(data.password, {min:6, max:30})){
        errors.password = 'password must be at least 6 charectors long';
    }

    console.log({errors, isValid: isEmpty(errors)})

    return {
        errors,
        isValid: isEmpty(errors)
    }
}