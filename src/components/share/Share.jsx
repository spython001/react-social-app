import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                <input 
                    placeholder="What's in your mind Spyt?" 
                    className="shareInput"
                />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <span>Photo/Video</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
