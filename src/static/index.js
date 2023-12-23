const ORDER_STATUS = {
    "WAITING": 'در انتظار پرداخت',
    "PREPARING": 'در حال آماده سازی',
    "SENDING": 'در حال ارسال',
    "SENT": 'ارسال شده',
    "CANCELED": 'کنسل شده',
}

const TRANSACTION_STATUS = {
    success: "SUCCESSFUL",
    fail: "FAILED",
    pending: "PENDING",
    200: "موفق",
    405: "تایید پرداخت امکان پذیر نیست",
    1: "پرداخت انجام نشده است",
    2: "پرداخت ناموفق بوده است",
    3: "خطا رخ داده است",
    6: "برگشت خورده سیستمی",
    7: "انصراف از پرداخت",
    10: "در انتظار تایید پرداخت",

};

module.exports = {
    ORDER_STATUS,
    TRANSACTION_STATUS
}