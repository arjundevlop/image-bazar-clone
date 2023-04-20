

const ImagesContainer = ({images})=>{
    return (
        <div className="images-container">
            {images.map((item)=>{
                return <div className="image-div"> <img src={item.urls.small_s3} className="image"></img>
                <div className="middle">
                  <div className="text">{item.alt_description}</div>
                  <div className="text">By {item.user.name}</div>
                </div>
                </div>
                
                 

                 
                
            })}
        </div>
    )
}

export default ImagesContainer;