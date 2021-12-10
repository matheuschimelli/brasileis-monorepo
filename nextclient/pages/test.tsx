import type { GetServerSideProps } from "next";
import DefaultLayout from "../components/layout/DefaultLayout";
import LawRender from "../components/LawRender/LawRender";

type Props = {
  data: any
}
const Busca = ({ data }: Props) => {
  return (
    <DefaultLayout title="teste">
      <LawRender data={data} />
    </DefaultLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {

  const req = await fetch('http://localhost:8080/api/v1/law-block/teste')
  const data = await req.json()
  console.log(data)

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
