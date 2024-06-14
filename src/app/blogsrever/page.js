import Button from './btn'
async function productlist() {
    let data = await fetch('https://dummyjson.com/quotes');
    data = await data.json();
    return data.quotes
}

export default async function page() {
    const products = await productlist();
    console.log(products)
    return (
        <div>
            <h1>Blog</h1>
            {
                products.map((item, index) => (
                    <div key={index}>
                        <p><b>Author:</b> {item.author}</p>
                        <p><strong>Quote:</strong> {item.quote}</p>
                        <Button name={item.author} />
                    </div>
                ))}
        </div>
    )
}


export function generateMetadata(){
    return{
        title:"Blogsrever",
        descripation:" Blogserver descripation "
    }
}