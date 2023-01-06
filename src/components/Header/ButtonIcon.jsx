import React from 'react'
import {   List} from 'semantic-ui-react'



export default function ButtonIcon({value}) {

    return (
        <>
        <div style={{display:'flex',justifyContent:'space-evenly' }}>
       {

      value.map((i)=>{
        return(

            <List.Item>
            <List.Icon className={`${i.value}`} size='large'/>
            <List.Content>
            <a href={i.uri} >
                <large >{i.name}</large></a>
            </List.Content>
        </List.Item>
        )
      })
       
         }
         </div>
        </>
    )
}


