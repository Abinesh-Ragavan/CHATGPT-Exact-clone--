//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

const express =require('express')
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-Qj0r7qOLyfaxtVpw4YYubi9I",
    apiKey:"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",
});
const openai = new OpenAIApi(configuration);

const bodyParser=require('body-parser')
const cors=require('cors')
const app =express();

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port =3080;
app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from CodeX!'
  })
})


app.post('/',async(req,res)=>{
    const {message}=req.body;
    console.log(message)
const response = await openai.createCompletion({
  model:"text-davinci-003",
  prompt: `${message}`,
  max_tokens: 100,
  temperature: 0.5,
});
res.json({
    message:response.data.choices[0].text
})


})


app.listen(port,()=>{
    console.log(`exmaple app listiening in https://localhost:${port}`)
});




