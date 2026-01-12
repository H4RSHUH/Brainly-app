import mongoose from "mongoose";
import "dotenv/config";
export declare const userModel: mongoose.Model<{
    password?: string | null;
    username?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    password?: string | null;
    username?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    password?: string | null;
    username?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    password?: string | null;
    username?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    password?: string | null;
    username?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    password?: string | null;
    username?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const contentModel: mongoose.Model<{
    tags: mongoose.Types.ObjectId[];
    type?: string | null;
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    tags: mongoose.Types.ObjectId[];
    type?: string | null;
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    tags: mongoose.Types.ObjectId[];
    type?: string | null;
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    tags: mongoose.Types.ObjectId[];
    type?: string | null;
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    tags: mongoose.Types.ObjectId[];
    type?: string | null;
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    tags: mongoose.Types.ObjectId[];
    type?: string | null;
    title?: string | null;
    link?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export declare const linkModel: mongoose.Model<{
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    userId?: mongoose.Types.ObjectId | null;
    hash?: string | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=db.d.ts.map