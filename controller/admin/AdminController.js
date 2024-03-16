
class AdminController{
    static AdminProfile = async (req,res) => {
        try{
            const {_id, name, email} = req.data1
            res.render('Admins/admin_profile',{id:_id, n:name, e:email})
        }catch(err){
            console.log(err)
        }
    }

    static AdminDashboard = async (req,res) => {
        const {_id, name, email} = req.data1
        res.render('Admins/dashboard', {id:_id, n:name, e:email})
    }
}

module.exports=AdminController