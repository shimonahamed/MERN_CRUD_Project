const express=require ('express')

const InvoiceController=require('../controler/crudController')

const route=express.Router()


route.post('/create',InvoiceController.Create)
route.get('/read',InvoiceController.Read)
route.get('/readbyId/:id',InvoiceController.readbyId)
route.post('/update/:id',InvoiceController.Update)
route.post('/delete/:id',InvoiceController.Delete)



module.exports=route;