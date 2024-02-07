import express, {Request,Response} from "express";
import Books from "../model/schema";
import AWS from 'aws-sdk';

const app = express();
const s3 = new AWS.S3();
AWS.config.update({
    accessKeyId: process.env.AWS_API_KEY,
    secretAccessKey: process.env.AWS_API_SECRET,
    region: process.env.AWS_REGION_NAME
});
export const getAllBooks = async(req: Request, res: Response) =>{
    try {
        const getBook = await Books.find();        
        return res.status(200).json({"message": getBook})
    } catch (error) {
        console.log(error)
    }
} 

export const addBook = async (req:any, res: Response) => {
     try {
        const {name, author, genre, available, price, image} = req.body;
        const searchBook = await Books.findOne({name: name});
        if(searchBook){
            throw "Book Already found"
        }  
        let imageUrl;
        // if (req.file) {
        //     const fileContent = req.file.buffer; 
        //     const params = {
        //         Bucket: 'your-bucket-name',
        //         Key: 'example.jpg',
        //         Body: fileContent
        //     };
        //     const uploadResult = await s3.upload(params,(err: any, data: any) => {
        //             if (err) {
        //                 console.error(err);
        //             } else {
        //                 console.log('File uploaded successfully:', data.Location);
        //             }
        //         })   
        //         console.log(uploadResult, "------");
        //         imageUrl = uploadResult
        // }
        const highestBook = await Books.findOne().sort({ id: -1 });
        let currentID = highestBook ? Number(highestBook.id) + 1 : 0;
        const adding = await Books.create({
          name: name,
          price: price,
          author: author,
          genre: genre,
          available: available,
          id: currentID,
        //   image: imageUrl,
        });        
        return res.status(200).json({"message": "Book added", "books":adding})
     } catch (error) {        
        return res.status(400).json({"message":"error adding this book", error})
     }
}

export const editBook = async (req:Request, res: Response) => {
    try {
        const {id} = req.params;   
        let imageUrl;     
        if(req.file){
            imageUrl = req.file.filename
        }     
        const updateBook = await Books.findOneAndUpdate({id: id},{ ...req.body,image: imageUrl,});
        if(!updateBook){
            throw `There is no book with the id : ${id}`
        }       
        return res.status(201).json({"message": "Book updated, please check the get request"})
    } catch (error) {
        return res.status(400).json({"message":"error editing this book", error})
    }
}

export const getById = async (req:Request, res: Response) => {
    try {
        const {id} = req.params;
        const oneBook = await Books.findOne({id: id});
        if(!oneBook){
            throw `Oops! No book with this id: ${id}`
        }
        return res.status(200).json({"message": "Here is your book", "book":oneBook})
    } catch (error) {
        return res.status(400).json({"message":"error finding the book by this id", error})
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;   
        const book = await Books.deleteOne({id: id});
        if(book.deletedCount > 0){
            return res.status(200).json({"message": `Book with the ${id} got deleted`})
        }
        return res.status(200).json({ message: `No book with the id ${id}` });
    } catch (error) {
        return res.status(400).json({"message":"error finding the book by this id", error})
    }
}