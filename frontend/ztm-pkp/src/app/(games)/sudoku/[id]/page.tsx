export default function Page({ params }: { params: { id: string } }) {
    fetch('http://backend:3000/apui/sudoku', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: params.id })
    }).then(res => res.json())


    
    return <div>My Post: {params.id}</div>
  }