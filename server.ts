// deno-lint-ignore-file
import * as oak from "https://deno.land/x/oak@v10.6.0/mod.ts";
import db from './db.ts'
import postRouter from './routes/post.ts'

const app = new oak.Application()
const router = new oak.Router()

router.get('/', (ctx) => {
    ctx.response.body = "I am kishor kc"
})

app.use(router.routes())
app.use(router.allowedMethods())
app.use(postRouter.prefix('/api/v1/todos').routes())

await db.sync({ drop: true });
console.log('database connected!!')

const port = 5000;
console.log(`server is running - http://localhost:${port}`)
await app.listen({ port })

// run the script in terminal with the flag
// $ denon run --allow-net --allow-read --allow-env server.ts 