import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import LawRender from "../components/LawRender";
import data from "../components/ViewerPage/test.json";

type Props = {
  data?: any;
};

const Busca = ({ data }: Props) => {
  return (
    <DefaultLayout title="teste">
      <LawRender data={data} />
    </DefaultLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};
export default Busca;
