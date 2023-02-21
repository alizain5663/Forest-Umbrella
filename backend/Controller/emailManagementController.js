const {sendMail} = require('../Missculinus/sendMailManagement')
const sendEmailAgent = async(req,res)=>{
    try {
        const payload = req.body;
        const emailResponse = await sendMail(payload);
        res.json({
            body: emailResponse,
            message: 'email has sent successfully'
        })
    } catch (error) {
        res.json({
            message: error,
            body:null
        })
    }
}

module.exports = { sendEmailAgent }