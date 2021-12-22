import React from 'react'
import { FormControl, FormLabel, Checkbox as ChakraCheckbox, FormHelperText, CheckboxGroup } from '@chakra-ui/react'

type Props = {
    name: string
    value?: string
    onChange?: (e: any) => void
    label: string
    type?: string | 'text'
    helper?: string
    placeholder?: string
}
export default function Checkbox({ name, value, onChange, type, label, helper, placeholder }: Props) {
    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <ChakraCheckbox size='lg' id={name} colorScheme='green' name={name} onChange={onChange} value={value} defaultChecked={false}>
                {placeholder}
            </ChakraCheckbox>
            {helper && (
                <FormHelperText>{helper}</FormHelperText>
            )}
        </FormControl>
    )
}