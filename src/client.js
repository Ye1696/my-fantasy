import {createClient } from 'contentful'

export function useContentful(){
    const client = createClient({
        space:process.env.REACT_APP_SPACE_ID,
        accessToken:process.env.REACT_APP_ACCESS_TOKEN
    })

    async function getNews() {
        try {
            const entries = await client.getEntries({
                content_type:"myFantasyNews",
                select:"fields"
            }).then((res)=>res)

            const newsData = entries.items.map((item)=>{
                const newsImmage = item.fields.newsImmage.fields
                return {...item.fields, newsImmage}
            })
            return newsData;
        } catch (error) {
            console.log(`Error fatching news: ${error}`)
        }
    }

    return {getNews}

}
 