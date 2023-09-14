import connectDb from "@/lib/db";
import Feed from "@/models/simpmod";
import { NextResponse } from "next/server";


export async function POST(request){
    const {title,description} = await request.json();

    await connectDb();
    await Feed.create({title, description});

    return NextResponse.json({message:'Data Added'},{status:200})


}

export async function GET(){
    await connectDb();
    const feed = await Feed.find();

    return NextResponse.json({feed})

}


export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");

    await connectDb();
    await Feed.findByIdAndDelete(id);

    return NextResponse.json({message: 'Topic Deleted '},{status:200});
    


}
