import React, { useRef, useState, useEffect } from 'react'
import {
    Button,
    AlertDialog as ChakraAlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react'

type Props = {
    title: string
    description: string
    onConfirm: (e?: any) => void
    isOpened: boolean
    isLoading: boolean
    onCancel: () => void
}
export default function AlertDialog({ title, description, isOpened, onConfirm, isLoading, onCancel }: Props) {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    useEffect(() => {
        setIsOpen(isOpened)
    }, [isOpened])

    return (
        <>
            <ChakraAlertDialog
                isOpen={isOpen}
                //@ts-ignore
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            {title}
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            {description}
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                //@ts-ignore
                                ref={cancelRef} onClick={onCancel}>
                                Cancelar
                            </Button>
                            <Button colorScheme='red' onClick={onConfirm} ml={3} isLoading={isLoading}>
                                Deletar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </ChakraAlertDialog>
        </>
    )
}