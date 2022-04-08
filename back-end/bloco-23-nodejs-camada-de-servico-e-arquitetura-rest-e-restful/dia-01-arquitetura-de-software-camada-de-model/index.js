    // index.js

    const express = require('express');

    const Author = require('./models/Author');
    const Books = require('./models/Books');
    const bodyParser = require('body-parser');

    const app = express();
    app.use(bodyParser.json());

    app.get('/authors', async (_req, res) => {
        const authors = await Author.getAll();

        res.status(200).json(authors);
    });

    app.get('/authors/:id', async (req, res) => {
      const { id } = req.params;

      const author = await Author.findById(id);

      if (!author) return res.status(404).json({ message: 'Not found' });

      res.status(200).json(author);
  });

  app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});


    app.get('/books', async (req, res) => {
      const { author_id } = req.query;
    
      const books = (author_id)
      ? await Books.getBybookId(author_id)
      : await Books.getAll();
    
      res.status(200).json(books);
    });

    app.get('/books/:id', async (req, res) => {
      const { id } = req.params;

      const book = await Books.findById(id);

      if (!book) return res.status(404).json({ message: 'Not found' });

      res.status(200).json(book);
  });

  app.post('/books', async (req, res) => {
    const { id, title, author_id } = req.body;

    if (!Books.isValid(id, title, author_id)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Books.create(id, title, author_id);

    res.status(201).json({ message: 'Book criado com sucesso! '});
});

    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
     console.log(`Ouvindo a porta ${PORT}`);
    });