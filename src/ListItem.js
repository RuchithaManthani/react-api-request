import React from 'react'

const ListItem = ({data}) => {
  return (
    <ul>
        {
           data.map(i=>
           <li key={i.id}>{JSON.stringify(i)}</li> 
            ) 
        }

    </ul>
  )
}

export default ListItem