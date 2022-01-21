const CatDisplay = ({catBreed} ) => {
    const {name,image,description} = catBreed;
        return(
        <>
            {name 
                ? <div className="catDisplay">
                    <h2>{name}</h2>
                        <div className="catContainer">
                            <div className="imgContainer">
                                <img src={image.url} alt={`This is an image of a ${name}`}/>
                            </div>
                            <div className="textBox">
                                <p>{description}</p>
                            </div>
                        </div>
                    
                </div>
                :<div></div>
            }
        </>
    ) 
}

export default CatDisplay
