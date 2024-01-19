export default function Page({ params }: { params: { id: string } }) {
    return <div>My post: {params.id}</div>
  }