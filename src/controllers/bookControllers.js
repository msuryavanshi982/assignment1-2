const bookModel = require("../models/bookModel")

const getBooks = async(req, res) => {
    try {
        const filter = {}
        
        if (req.query.isbn) {
            const findISBN = await bookModel.find({ isbn: req.query.isbn })
            if(!findISBN) return res.status(400).send({status:false,message:"This isbn does not exist"})
            filter.isbn=req.query.isbn
        }
        if (req.query.email) {
            const findEmail = await bookModel.find({ email: req.query.email })
            if(!findEmail) return res.status(400).send({status:false,message:"This email does not exist"})
            filter.email = req.query.email
            
        }
     
        const books = await bookModel.find(filter).sort({ 'title': 1 })
        res.status(200).send({status:true,message:"Book",data:books})

        
    } catch (err) {
        res.status(400).send(err.message)
        
    }

}

module.exports={getBooks}