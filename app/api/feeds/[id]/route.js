import connectDb from "@/lib/db";
import Feed from "@/models/simpmod";
import { NextResponse } from "next/server";

export async function PUT(request,{params}){
    const {id} = params;
    console.log(id);

    const{newTitle: title, newDescription: description  } = await request.json()

    await connectDb();

    await Feed.findByIdAndUpdate(id, {title, description});
    
    return NextResponse.json({message:"Updated"},{status:200})

}


export async function GET(request,{params}){
    const {id} = params;

    await connectDb();
    const feed = await  Feed.findOne({_id: id});

    return NextResponse.json({feed},{status : 200})


}

