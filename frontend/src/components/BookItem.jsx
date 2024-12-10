

export function BookItem({title, author, price}) {
    return (
        <div>
            <span>{title}</span>
            <span>{author}</span>
            <span>{price}</span>
        </div>
    )
}