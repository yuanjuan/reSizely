import { useRouter } from "next/router"

export default () => {
  const router = useRouter()
  const {type} = router.query
  return <p>type: {type}</p>
}