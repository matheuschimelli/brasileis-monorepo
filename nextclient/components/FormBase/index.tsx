import React, { useEffect } from 'react'
import { Box, Text, Button, useToast } from '@chakra-ui/react'
import { MutationType, useData, useForm, useMutate } from '../../lib/hooks'
import router, { useRouter } from 'next/router';
type Props = {
    formTitle: string
    children: React.ReactNode
    update?: boolean
    destroy?: boolean
    create?: boolean
    onSave?: () => void
    onDestroy?: () => void
    initSchema: any,
    data?: any,
    apiRoute: string,
    method: MutationType
    loadDataFromId?: string
}

export default function FormBase({
    formTitle,
    children,
    destroy,
    create,
    onSave,
    onDestroy,
    initSchema,
    apiRoute,
    method,
    loadDataFromId
}: Props) {
    const router = useRouter()
    const { id: dataId } = router.query

    const loadedFormData = useData(`${process.env.SERVER_URL}/api/v1/${apiRoute}/${dataId}`)

    const { handleInputChange, form, initFormData, handleSubmit } = useForm({
        ...initSchema
    });

    const handleCreate = useMutate();
    const handleUpdate = useMutate();
    const handleDelete = useMutate();
    const toast = useToast()

    useEffect(() => {
        if (loadedFormData.data) {
            initFormData(loadedFormData.data)
        }
    }, [loadedFormData.data])


    const saveData = async () => {
        try {
            if (loadedFormData.data && loadedFormData.data.id) {
                const res = await handleCreate.mutate(
                    1,
                    'PUT',
                    `${process.env.SERVER_URL}/api/v1/${apiRoute}/${loadedFormData.data.id}`,
                    {
                        ...form,
                    }
                );
                if (res.status == 200) {
                    toast({
                        title: 'Atualizado',
                        status: 'info',
                        duration: 9000,
                        isClosable: true,
                    })
                } else {

                    const responseData = await res.json()
                    for (const err of responseData.errors) {
                        toast({
                            title: `${err.msg}`,
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                }


            } else {
                const res = await handleCreate.mutate(1, 'POST', `${process.env.SERVER_URL}/api/v1/${apiRoute}`, {
                    ...form,
                });
                toast({
                    title: 'Salvo',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                const resData = await res.json()
                router.push(`${apiRoute}/${resData.id}`)
            }
        } catch (err) {
            console.log(err)
            toast({
                title: `${err}`,
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

    };

    const deleteData = async () => {
        await handleDelete.mutate(2, "DELETE", `${process.env.SERVER_URL}/api/v1/${apiRoute}/${loadedFormData.data.id}`, {
            ...form,
        });
        toast({
            title: 'Apagado',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        router.back();
    };


    // https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    // automatically handle input props and manage all of them on this form component
    const childrenWithProps = React.Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a typescript
        // error too.
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { onChange: handleInputChange, value: form[child.props.name] });
        }
        return child;
    });

    return (
        <Box
            as="form"
            display="flex"
            flexDir="column"
            padding="10"
            shadow="xs"
            borderRadius="base"
            gridGap={10}
            onSubmit={handleSubmit}>

            <Text fontSize="2xl" fontWeight="bold" mb="1">{formTitle}</Text>

            {childrenWithProps}

            <Box display="flex" flexDir={['column', 'column', 'row']} gridGap={5}>
                {create && (
                    <Button colorScheme="blue" onClick={saveData} isLoading={handleCreate.loading[1]} loadingText='Salvando'>Salvar</Button>
                )}
                {destroy || dataId && (
                    <Button colorScheme="red" onClick={deleteData} isLoading={handleDelete.loading[2]} loadingText='Apagando'>Apagar</Button>
                )}

            </Box>
        </Box>
    )
}