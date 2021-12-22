import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
import { useForm } from '../../lib/hooks'
type Props = {
    formTitle: string
    children: React.ReactNode
    update?: boolean
    destroy?: boolean
    create?: boolean
    onSave?: () => void
    onDestroy?: () => void
    initSchema: any
}

export default function FormBase({
    formTitle,
    children,
    destroy,
    create,
    onSave,
    onDestroy,
    initSchema
}: Props) {

    const { handleInputChange, form, initFormData, handleSubmit } = useForm({
        ...initSchema
    });
    // @ts-ignore
    var data = React.Children.map(children => children);

    console.log('DATAAAA', children)



    return (
        <Box as="form" display="flex" flexDir="column" padding="10" shadow="xs" borderRadius="base" gridGap={10}>
            <Text fontSize="2xl" fontWeight="bold" mb="10">{formTitle}</Text>
            {children}
            <Box display="flex" flexDir={['column', 'column', 'row']} gridGap={5}>
                {create && (
                    <Button colorScheme="blue" onClick={onSave}>Salvar</Button>
                )}
                {destroy && (
                    <Button colorScheme="red" onClick={onDestroy}>Apagar</Button>
                )}

            </Box>
        </Box>
    )
}