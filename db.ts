import { Database } from "https://deno.land/x/denodb@v1.0.40/mod.ts"
import "https://deno.land/std@0.148.0/dotenv/load.ts";

import Post from './models/post.ts'
const db = new Database({
    dialect: 'postgres',
    disableDialectUsageDeprecationWarning: true,
},
    {
        host: Deno.env.get('POSTGRES_HOST'),
        username: Deno.env.get('POSTGRES_USER'), 
        password: Deno.env.get('POSTGRES_PASSWORD'),
        database: Deno.env.get('POSTGRES_DB'),
        port: 2569,
    });


db.link([Post])

export default db;