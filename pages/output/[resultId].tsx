import { useRouter } from 'next/router'
import useSWR from 'swr'
import Loading from '../../components/Loading'
import { MouseEventHandler, useCallback } from 'react'
import { copyTextToClipboard } from '../../lib/utils'
import { debounce } from 'lodash'

const Result = (props: any) => {
  const router = useRouter()
  const { resultId } = router.query

  const { data, error } = useSWR(`/output/${resultId}`)

  /**
   * 复制
   */
  const copy: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    copyTextToClipboard(data.url)
  }, [resultId])

  // TODO: 做一个loading页面，暂时只有这里需要LoadinU
  return !data && !error ? (
    <Loading />
  ) : (
    <div className="m-6 text-center">
      <section className="py-10">
        <p className="py-2">size chart url</p>
        <p className="py-4">{data.url}</p>
        <div className="flex justify-between max-w-md m-auto">
          <button onClick={copy} className="btn-primary">
            Copy URL
          </button>
          <button onClick={copy} className="btn-primary">
            Copy HTML
          </button>
          <button onClick={copy} className="btn-primary">
            Save Image
          </button>
        </div>
      </section>
      <section className="my-3">
        <p>Dynamic size Chart</p>
        <p className="py-4">{`<iframe src='${data.url}' style="display: block; border: 0; width:100%; height:100%"></iframe>`}</p>
        <button onClick={copy} className="btn-primary">
          Copy Code
        </button>
      </section>
      <section>
        <p className="my-3">Preview</p>
        <img src={data.url} alt="" />
      </section>
    </div>
  )
}

// what did this used for
// why add this on dynamic page will resolve the problem
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default Result
