const CatDisplay = ({catBreed} ) => {
    const {name,image,description} = catBreed;
        return(
        <>
            {name 
                ? <div>
                    <h2>{name}</h2>
                    <img src={image.url} alt={`This is an image of a ${name}`}/>
                    <p>{description}</p>
                </div>
                :<div></div>
            }
        </>
    ) 
}

export default CatDisplay
