
import {useState, useEffect} from 'react'
import {createClient} from 'contentful'

const client = createClient({
    space:`${import.meta.env.VITE_SPACE_ID}`,
    environment:'master',
    accessToken:`${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`
})

export const useFetchItems = ()=>{
    const [loading, setLoading] = useState(true)
    const [items,setItems] = useState([])
    const [items1,setItems1] = useState([])

    const getData = async()=>{
        try {
            const response = await client.getEntries({content_type:'items'})
            const items = response.items.map((item)=>{
                const {title,price1,image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                console.log(img);
            return{id,title,price1,img}
       
            })
            const response1 = await client.getEntries({content_type:'items1'})
            const items1 = response1.items.map((item)=>{
                const {title,price1,image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                console.log(img);
            return{id,title,price1,img}
       
            })
            setItems(items)
            setItems1(items1)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData()
    },[])
    return {loading,  items,items1}
}

