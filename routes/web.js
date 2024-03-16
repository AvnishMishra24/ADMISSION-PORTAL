const express = require('express')
const AdminController = require('../controller/admin/AdminController')
const UserController = require('../controller/UserController')
const CheckUserAuth = require('../middleware/auth')
const router = express.Router()

// UserController
router.get('/logout',CheckUserAuth,UserController.Logout)
router.post('/register',UserController.Register)
router.post('/verify_login',UserController.Verify_login)
router.get('/dashboard',CheckUserAuth,UserController.Dashboard)
router.get('/about',CheckUserAuth,UserController.About)
router.get('/contact',CheckUserAuth,UserController.Contact)
router.get('/',UserController.Home)
router.post('/profile',UserController.Profile)
router.post('/register_course',UserController.Course)
router.get('/appliedcourses',CheckUserAuth,UserController.AppliedCourses)
router.get('/appliedcourses/view/:id',CheckUserAuth,UserController.View)
router.post('/update_course/:id',CheckUserAuth,UserController.Update_course)

// AdminController
router.get('/admin/profile',CheckUserAuth,AdminController.AdminProfile)
router.get('/admin/dashboard',CheckUserAuth,AdminController.AdminDashboard)


module.exports=router