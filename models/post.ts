import { DataTypes, Model } from "https://deno.land/x/denodb@v1.0.40/mod.ts"
class Post extends Model {
    static table = 'posts';
    static timestamps = true;
    static fields = {
        id: { primaryKey: true, autoIncrement: true },
        name: { type: DataTypes.STRING, unique: true },
        desc: { type: DataTypes.STRING, },
        price: { type: DataTypes.FLOAT },
    };
    static defaults = {};
}

export default Post