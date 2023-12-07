const { validationResult, check, body } = require("express-validator");
const userServices =  require('../../services/user/user.service')

const registerValidator = () => {
    return [
        body("userName", "نام کاربری را وارد کنید")
            .notEmpty()
            .custom(async (value, { req }) => {
                if (value && !value.match(/^[a-zA-Z0-9_-]{3,16}$/)) 
                    throw new Error("فرمت نام کاربری اشتباه است")
                else if(value && await userServices.findUser({userName: value})) {
                    console.log('sadmbasnfsa')
                    throw new Error("این نام کاربری قبلا استفاده شده است")
                }
                else return value;
            }),
        body("password", 'کلمه عبور  خود را وارد کنید')
            .notEmpty(),
        body("firstName", 'نام خود را وارد کنید')
            .notEmpty()
            .custom( async (value, { req }) => {
                    if(!(value.match(/^[\u0600-\u06FF\s]+$/)))
                        throw new Error('نام باید فارسی باشد');
                    else return value;
                }),
        body("lastName", 'نام خانوادگی خود را وارد کنید')
            .notEmpty()
            .custom( async (value, { req }) => {
                    if(!(value.match(/^[\u0600-\u06FF\s]+$/)))
                        throw new Error('نام خانوادگی باید فارسی باشد');
                    else return value;
                }),
        body("phoneNumber", 'شماره تلفن خود را وارد کنید')
            .notEmpty()
            .custom( async (value, { req }) => {
                if(!(value.match(/^09[0|1|2|3][0-9]{8}$/)))
                    throw new Error('شماره تلفن نا معتبر است');
                else if(value && await userServices.findUser({phoneNumber: value})) {
                    throw new Error("این شماره تلفن قبلا استفاده شده است")
                }
                else return value;
            }),
        body("email", ' ایمیل خود را وارد کنید')
            .notEmpty()
            .isEmail().withMessage('ایمیل نا معتبر است')
            .custom( async (value, { req }) => {
                if(value && await userServices.findUser({email: value})) {
                    throw new Error("این ایمیل قبلا استفاده شده است")
                }
                else return value;
            }),
        
    ];
};

module.exports = {
    registerValidator,
};
