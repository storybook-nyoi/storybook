import React from "react";

export default function StoryBook(props){
    return (
        <div className="flex h-4/5 flex-col justify-center align-center">
            <button className="btn btn-primary self-end m-1" onClick={()=>props.backToChooseStory()}>Pick a New Story</button>
            <div className="flex w-full h-full justify-center">
                <div className="card bg-base-100 shadow-xl self-center align-center w-2/5 h-5/6">
                    <div className="card-body">
                        text card
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl self-center align-center w-2/5 h-5/6">
                    <div className="card-body">
                        picture card
                    </div>
                </div>
            </div>
            <div className="justify-end self-center w-auto">
                <div className="btn-group grid grid-cols-2">
                    <button className="btn btn-primary">Previous</button>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
    )
}