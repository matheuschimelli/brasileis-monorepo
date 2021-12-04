import { GetServerSideProps } from 'next'
import React from "react";
import {
  Avatar,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
  Button,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Badge
} from "@chakra-ui/react";
import dayjs from '../../lib/dayjs'
import SettingsBox from '../../components/UserSettings/SettingsBox';
import DefaultLayout from "../../components/layout/DefaultLayout";
import { useAuth } from '../../lib/auth';
import { getData } from '../../lib/hooks';

const RenderActive = ({ isActive }: { isActive: boolean }) => {
  if (isActive) {
    return (
      <Badge colorScheme='green'>Ativo</Badge>
    )
  }
  return (
    <Badge colorScheme='red'>Inativo</Badge>
  )
}
type Props = {
  subscriptions: any[]
}
export default function Component({ subscriptions }: Props) {
  const { user, token } = useAuth()
  if (!user) {
    return (
      <>Erro</>
    )
  }
  const openStripePanel = async () => {
    const request = await getData(`${process.env.SERVER_URL}/api/v1/checkout/portal`, token!)

    const data: any = await request.json()
    console.log('DATAAAA', data)
    if (data && data.url) {
      return window.location.href = data.url
    }
  }
  return (
    <DefaultLayout title="Configurações da conta" >

      <Box display="flex" flexDir="column" gridGap="10">
        <SettingsBox title="Dados da conta">
          <Box>
            <Avatar size='2xl' name={user.name} src={user.profile.picture} />

          </Box>
          <Box display="flex" flexDir="column" gridGap="5" w="container.md">
            <FormControl id='name'>
              <FormLabel>Nome</FormLabel>
              <Input type='text' disabled value={user.name} />
            </FormControl>

            <FormControl id='email'>
              <FormLabel>Email</FormLabel>
              <Input type='email' disabled value={user.email} />
              <FormHelperText>Email utilizado pelo login com Google</FormHelperText>
            </FormControl>
          </Box>
        </SettingsBox>
        {/* <SettingsBox title="Assinaturas">
                    <Box display="flex" flexDir={['column', 'column', 'row']} gridGap={['3', '3', '10']} alignItems='center' >
                        {!subscriptions || subscriptions.length === 0 && (
                            <Text>Você não possui um histórico de assinaturas</Text>
                        )}

                        <Table variant='striped' size="sm" colorScheme='gray'>
                            <TableCaption>Histórico de assinaturas plano PRO Brasileis</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Situação</Th>
                                    <Th>Início</Th>
                                    <Th>Término</Th>
                                    <Th>Início</Th>
                                    <Th>Cancelamento</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {subscriptions && subscriptions.map((subscription) => {
                                    return (
                                        <Tr>
                                            <Td><RenderActive isActive={subscription.isActive} /></Td>
                                            <Td>{dayjs(subscription.startDate).format('DD/MM/YYYY')}</Td>
                                            <Td>{dayjs(subscription.endDate).format('DD/MM/YYYY')}</Td>
                                            <Td>{dayjs(subscription.created).format('DD/MM/YYYY')}</Td>
                                            <Td>{dayjs(subscription.endedAt).format('DD/MM/YYYY')}</Td>

                                        </Tr>
                                    )
                                })
                                }
                            </Tbody>

                             <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                            </Tfoot> 
                        </Table>

                    </Box>
                </SettingsBox> */}
        <SettingsBox title="Assinatura">
          <Box display="flex" flexDir={['column', 'column', 'row']} gridGap={['3', '3', '10']} alignItems='center' >
            <Box display="flex" flexDir="column" >

              {!subscriptions || subscriptions.length === 0 && (
                <Text>Você não possui um histórico de assinaturas</Text>
              )}
              {!subscriptions || subscriptions.length !== 0 && (
                <Button colorScheme="blue" onClick={openStripePanel}>Abrir painel de assinatura</Button>

              )}

            </Box>
          </Box>
        </SettingsBox>


        {/* <SettingsBox title="Avançado">
              <Box display="flex" flexDir={['column', 'column', 'row']} gridGap={['3', '3', '10']} alignItems='center' >
                  <Text w={{ lg: 4 / 12 }}>Apagar minha conta</Text>
                  <Box display="flex" flexDir="column" >
                      <Text>Remove sua conta de usuário e apaga todos os dados relacionados a ela cancelando assinaturas ativas se existirem.</Text>
                      <Button colorScheme="red">Apagar minha conta</Button>

                  </Box>
              </Box>
          </SettingsBox> */}
      </Box>
    </DefaultLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const token = req.cookies.token
  const request = await getData(`${process.env.SERVER_URL}/api/v1/user/subscriptions`, token)
  const data: any = await request.json()

  if (!token || !data) {
    return {
      props: {},
      redirect: {
        destination: '/'
      }
    }
  }
  return {
    props: {
      subscriptions: data.subscriptions
    }
  }
}