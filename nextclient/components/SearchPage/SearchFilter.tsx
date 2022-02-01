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
        <CheckboxGroup colorScheme='blue' onChange={onChange} >

            <Accordion allowToggle>
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
                        <Stack spacing={[1, 5]} direction={['column', 'column']}>
                            <Checkbox value={JSON.stringify({ field: "identifier", value: "cc" })}>Código Civil</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "identifier", value: "cp" })}>Código Penal</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "identifier", value: "cdc" })}>Código de Defesa do Consumidor</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "identifier", value: "cpc" })}>Código de Processo Civil</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "identifier", value: "cpp" })}>Código de Processo Penal</Checkbox>

                        </Stack>

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

                        <Stack spacing={[1, 5]} direction={['column', 'column']}>
                            <Checkbox value={JSON.stringify({ field: "blockType", value: "artigo_lei" })}>Artigo</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "blockType", value: "inciso_lei" })}>Inciso</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "blockType", value: "alinea_lei" })}>Alínea</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "blockType", value: "paragrafo_lei" })}>Parágrafo</Checkbox>
                            <Checkbox value={JSON.stringify({ field: "blockType", value: "paragrafo_unico_lei" })}>Parágrafo Único</Checkbox>
                        </Stack>

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </CheckboxGroup>
    )
}