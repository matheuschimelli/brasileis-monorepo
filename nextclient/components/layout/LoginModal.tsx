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
    useDisclosure,
    Box
} from '@chakra-ui/react'

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">Fazer Login</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box py="10">
                        <Button colorScheme="blue" w="100%">Login com Google</Button>
                        <div className="g-signin2" data-onsuccess="onSignIn"></div>

                    </Box>
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