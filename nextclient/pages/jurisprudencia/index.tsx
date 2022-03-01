import type { GetServerSideProps } from "next";
import DefaultLayout from "../../components/layout/DefaultLayout";
import JurisprudenciaFinder from "../../components/JurisprudenciaFinder";
import { Center, Text, Box, Divider } from "@chakra-ui/react";
import SearchForm from "../../components/layout/SearchForm";

type Props = {
    data: any
}
const Busca = ({ data }: Props) => {
    return (
        <DefaultLayout title={`Jurisprudência`}>
            <Box minH="50vh" display="flex" flexDir="column">
                <Box
                    mt="10"
                    display="flex"
                    flexDir="column"
                    gridGap="10"
                >
                    <Center>
                        <Text as="h1" fontSize="3xl" fontWeight="bold">
                            Pesquisa de Jurisprudência Brasileis
                        </Text>
                    </Center>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignContent="center"

                    >
                        <SearchForm />
                    </Box>
                    <Divider />
                </Box>
                <Box mt="10">
                    <Center>
                        <Text as="h1" fontSize="xl" fontWeight="thin">
                            Últimas jurisprudências por tribunal
                        </Text>
                    </Center>
                </Box>
            </Box>

        </DefaultLayout>
    );
};
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     try {

//         const id = context.params!.id?.toString()

//         const jurisprudencia = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL!}/api/v1/jurisprudencia/${id}`)
//         const jurisprudenciaData = await jurisprudencia.json()

//         if (!jurisprudenciaData) return { notFound: true };

//         return {
//             props: { data: jurisprudenciaData }, // will be passed to the page component as props
//         };

//     } catch (err) {
//         return {
//             notFound: true,
//         };
//     }
// };
export default Busca;
