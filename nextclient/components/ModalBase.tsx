import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box
} from '@chakra-ui/react'

export default function ModalBase({ isOpen, onClose, content }: { isOpen: boolean, onClose: () => void, content: React.ReactChildren }) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">Fazer Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {content}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant='ghost'>Ok</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}