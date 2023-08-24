import { NextResponse } from "next/server";
const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)

    const t = searchParams.get("q")

    const res = await fetch(BASE_URL+'?q='+t+'?language=en&limit=6&session_token=5ccce4a4-ab0a-4a7c-943d-580e55542363'
    +"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,
        {
            headers:{
                "Content-Type": "application/json"
            }
    })
    const b = await res.json()

    return NextResponse.json(b)
    
}