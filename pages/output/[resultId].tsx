import { useRouter } from "next/router";
import useSWR from "swr";
import Loading from "../../components/Loading";

const Result = (props: any) => {
  const router = useRouter();
  const { resultId } = router.query;

  const { data, error, isValidating } = useSWR(`/output/${resultId}`);

  // TODO: 做一个loading页面，暂时只有这里需要LoadinU
  return !data && !error ? (
    <Loading />
  ) : (
    <div className="m-6 text-center">
      <section className="py-10">
        <p className="py-2">size chart url</p>
        <p className="py-4">{data.url}</p>
        <div className="flex justify-between max-w-md m-auto">
          <button className="px-6 py-2 border-2 border-indigo-100 rounded-full">
            Copy URL
          </button>
          <button className="px-6 py-2 border-2 border-indigo-100 rounded-full">
            Copy HTML
          </button>
          <button className="px-6 py-2 border-2 border-indigo-100 rounded-full">
            Save Image
          </button>
        </div>
      </section>
      <section className="my-3">
        <p>Dynamic size Chart</p>
        <p className="py-4">{data.url}</p>
        <button className="px-6 py-2 border-2 border-indigo-100 rounded-full">
          Copy Code
        </button>
      </section>
      <section>
        <p className="my-3">Preview</p>
        <img src={data.url} alt="" />
      </section>
    </div>
  );
};

// what did this used for
export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Result;
