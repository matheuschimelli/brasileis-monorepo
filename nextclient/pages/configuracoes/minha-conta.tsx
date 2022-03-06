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
  Button
} from "@chakra-ui/react";
import SettingsBox from '../../components/UserSettings/SettingsBox';
import DefaultLayout from "../../components/layout/DefaultLayout";
import { useAuth } from '../../lib/auth';
import { getData, getDataFromApi } from '../../lib/hooks';


type MinhaContaPageProps = {
  subscriptions: any[]
}

export default function MinhaContaPage({ subscriptions }: MinhaContaPageProps) {
  const { user, token } = useAuth()
  if (!user) {
    return (
      <>Erro</>
    )
  }
  const openStripePanel = async () => {
    const request = await getData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/checkout/portal`, token!)

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

      </Box>
    </DefaultLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req: { cookies: { token } } }) => {
  const request = await getDataFromApi('user/subscriptions', token)
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