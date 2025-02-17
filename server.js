import express from 'express';

const app = express();

app.use(express.static('dist'))

const port = process.env.port || 3000;

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
          id: 1,
          title: "Article 1",
          content: "This is the content of Article 1."
        },
        {
          id: 2,
          title: "Article 2",
          content: "This is the content of Article 2."
        },
        {
          id: 3,
          title: "Article 3",
          content: "This is the content of Article 3."
        },
        {
          id: 4,
          title: "Article 4",
          content: "This is the content of Article 4."
        },
        {
          id: 5,
          title: "Article 5",
          content: "This is the content of Article 5."
        }
      ];
      res.send(jokes);

});

app.listen(port, () => {
    console.log(`server at ${port}`)
});
