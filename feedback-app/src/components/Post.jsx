import { Navigate, useNavigate } from 'react-router-dom'

function Post() {
  const status = 200

  const navigate = useNavigate()

  const onClick = () => {
    console.log('Hello you clicked')	
    navigate('/about')	
  }

  if(status === 404)
  {
    return <Navigate to = '/not-found' />
  }
  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>
    </div>
  )
}

export default Post