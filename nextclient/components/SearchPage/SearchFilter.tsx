import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    CheckboxGroup,
    Checkbox,
    Stack
} from '@chakra-ui/react'

type Props = {
    onChange?: (options: any) => void
}
export default function SearchFilter({ onChange }: Props) {
    return (
        <Accordion>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Código
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup colorScheme='blue' onChange={onChange}>
                        <Stack spacing={[1, 5]} direction={['column', 'column']}>
                            <Checkbox value='cc'>Código Civil</Checkbox>
                            <Checkbox value='cp'>Código Penal</Checkbox>
                            <Checkbox value='cdc'>Código de Defesa do Consumidor</Checkbox>
                            <Checkbox value='cpc'>Código de Processo Civil</Checkbox>
                            <Checkbox value='cpp'>Código de Processo Penal</Checkbox>

                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box flex='1' textAlign='left'>
                            Tipo
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <CheckboxGroup colorScheme='blue' >
                        <Stack spacing={[1, 5]} direction={['column', 'column']}>
                            <Checkbox value='cc'>Artigo</Checkbox>
                            <Checkbox value='cp'>Inciso</Checkbox>
                            <Checkbox value='cdc'>Alínea</Checkbox>
                            <Checkbox value='cpc'>Parágrafo</Checkbox>
                            <Checkbox value='cpp'>Parágrafo Único</Checkbox>
                            <Checkbox value='cpp'>Decreto</Checkbox>
                            <Checkbox value='cpp'>Lei</Checkbox>
                            <Checkbox value='cpp'>Portaria</Checkbox>

                        </Stack>
                    </CheckboxGroup>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}