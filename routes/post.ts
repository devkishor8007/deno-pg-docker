// deno-lint-ignore-file
import * as oak from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { getPost, createPost, updatePost, deletePost } from '../controllers/post.ts'

const router = new oak.Router()

router.get('/', getPost)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)

export default router