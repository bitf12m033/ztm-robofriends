import React from 'react'
import Card from './Card'

export default function CardList({robots}) {
    // if(true)
    // {
    //     throw new Error('Opppppppsssss!!!')
    // }
    return (
        <div>
            {
                robots.map((robot) => {
                     return (<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />)
                 })
            }
        </div>
    )
}
