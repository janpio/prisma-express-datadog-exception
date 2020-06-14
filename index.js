const tracer = require('dd-trace').init();

var express = require("express");
const app = express();

app.get("/ok", async (req, res) => {
    res.send('ok');
})

app.get("/crash", async (req, res) => {
    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient();

    let customers = await prisma.customer.findMany();

    res.send('crash');
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on ${ PORT } (possibly http://localhost:${ PORT } )`))
