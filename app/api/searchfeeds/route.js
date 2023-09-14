import connectDb from "@/lib/db";
import Feed from "@/models/simpmod";
import { NextResponse } from "next/server";

export async function GET(request){
    
    const title =  request.nextUrl.searchParams.get("title");

    

    await connectDb();
    const feed = await Feed.find({title:title});


    return NextResponse.json({feed})


}