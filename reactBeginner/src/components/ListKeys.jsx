import  { useState, useEffect } from 'react'

const ListKeys = () => {
    const list = [{
        id: 1,
        name: 'NS 200'
    },
    {
        id: 2,
        name: "MT 15"
    },
    {
        id: 3,
        name: "Ducati Monster"
    }, {
        id: 4,
        name: "Royal Enfield"
    }
]
    const [myList, setList] = useState([])

    useEffect(() => {
        setTimeout(() => setList(list), 3000)
    },[])

    console.log(myList)

  return (
    <div>
{
    myList?.length <= 0 ? <p>Loading .......</p> : <div>
        {
            myList?.map((item) => (
                <p key={item?.id}>{item?.name}</p>
            ))
        }
    </div>
}
    </div>
  )
}

export default ListKeys