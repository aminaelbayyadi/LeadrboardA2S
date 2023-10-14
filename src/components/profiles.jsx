import React from 'react'

export default function profiles({ Leaderboard }) {
  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div>
  )
  
}
function Item(data){
    return (

        <>
        <form className="for">
            {
                data.map((value, index) => (
                <div className="A2S">
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
                            <div className="info">
                                <h3 className='name text-dark'>{value.username}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.field}</span>
                        </div>
                        <div className="item">
                            <span>{value.cell}</span>
                        </div>
                        <div className="item">
                            <span>{value.points}</span>
                        </div>
                    </div>
                </div>
                    )
                )
            }
            </form>
        </>

        
    )
}
