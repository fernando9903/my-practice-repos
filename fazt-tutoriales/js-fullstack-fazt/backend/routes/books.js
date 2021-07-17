const {Router} = require('express');
const router = Router();

const Book = require('../models/Book')

//router.get('/api/books', (req, res) => res.json({ text: 'Hello world'}));

router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/', async (req, res) => {
    // console.log(req.body);
    const { title, author, isbn } = req.body;
    const newBook = Book ({title, author, isbn});
    // console.log(newBook);
    await newBook.save();
    res.json({message: 'Book Saved'});
});

router.delete('/:id', async (req, res) => {
    //console.log(req.params.id)
    const book = await Book.findByIdAndDelete(req.params.id);
    res.json({message: 'Book deleted', book})
});

module.exports = router;