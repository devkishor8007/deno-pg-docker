// deno-lint-ignore-file
import Post from '../models/post.ts'
export const getPost = async (ctx: any) => {
    try {
        const posts = await Post.orderBy('updatedAt', 'desc').select("id", "name", "desc", "price").all()
        ctx.response.body = {
            count: posts.length,
            data: posts
        }
    } catch (e) {
        console.log(e.message)
        ctx.response.body = { error: 'something went wrong' }
        ctx.response.status = 500
    }
}

export const createPost = async (ctx: any) => {
    try {
        const { name, desc, price } = await ctx.request.body({ type: "json" }).value

        await Post.create({ name, desc, price })
        ctx.response.body = {
            success: true,
            message: 'successfully created!'
        }
    } catch (e) {
        console.log(e.message)
        ctx.response.body = { message: e.message }
        ctx.response.status = 500
    }
}

export const updatePost = async (ctx: any) => {
    try {
        const { id } = ctx.params
        const { name, desc, price } = await ctx.request.body({ type: "json" }).value

        await Post.where("id", id).update({ name, desc, price })
        ctx.response.body = {
            success: true,
            message: 'successfully updated!'
        }
    } catch (e) {
        console.log(e.message)
        ctx.response.body = { message: e.message }
        ctx.response.status = 500
    }
}

export const deletePost = async (ctx: any) => {
    try {
        const { id } = ctx.params;

        await Post.deleteById(id)
        ctx.response.body = {
            success: true,
            message: 'successfully deleted!'
        }
    } catch (e) {
        console.log(e.message)
        ctx.response.body = { message: e.message }
        ctx.response.status = 500
    }
}