import React, { useEffect, useState } from 'react'
import { Box, Text, Button, useToast } from '@chakra-ui/react'
import { MutationType, useData, useForm, useMutate } from '../../lib/hooks'
import router, { useRouter } from 'next/router';
import AlertDialog from './ConfirmDialog';
import { useAuth } from '../../lib/auth';
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
    const [isDeletedDialogOpen, setIsDeletedDialogOpen] = useState(false)
    const [isDialogLoading, setIsDialogLoading] = useState(false)

    const router = useRouter()
    const { id: dataId } = router.query
    const { token } = useAuth()

    const loadedFormData = useData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/${apiRoute}/${dataId}`, token)

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
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/${apiRoute}/${loadedFormData.data.id}`,
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
                const res = await handleCreate.mutate(1, 'POST', `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/${apiRoute}`, {
                    ...form,
                });

                const resData = await res.json()

                if (res.status == 200) {
                    toast({
                        title: 'Salvo',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })

                    router.push(`/admin/${apiRoute}/${resData.id}`)
                } else {

                    for (const err of resData.errors) {
                        toast({
                            title: `${err.msg}`,
                            status: 'error',
                            duration: 9000,
                            isClosable: true,
                        })
                    }
                }
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

    const confirmDelete = () => {
        setIsDeletedDialogOpen(true)
    }

    const cancelDelete = () => {
        setIsDeletedDialogOpen(false)
    }


    const deleteData = async () => {
        setIsDialogLoading(true)
        await handleDelete.mutate(2, "DELETE", `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/${apiRoute}/${loadedFormData.data.id}`, {
            ...form,
        });
        toast({
            title: 'Apagado',
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        setIsDeletedDialogOpen(false)
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
        <>
            <AlertDialog
                title='Confirmar delete'
                description='Você realmente quer deletar isso? Essa ação é irreversível.'
                onConfirm={deleteData}
                isOpened={isDeletedDialogOpen}
                isLoading={handleDelete.loading[2]}
                onCancel={cancelDelete}
            />
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
                        <Button colorScheme="red" onClick={confirmDelete} isLoading={handleDelete.loading[2]} loadingText='Apagando'>Apagar</Button>
                    )}

                </Box>
            </Box>
        </>
    )
}