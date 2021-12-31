import React from 'react'
import { FormControl, FormLabel, Textarea as ChakraTextarea, FormHelperText } from '@chakra-ui/react'

type Props = {
    name: string
    value?: string | ''
    onChange?: (e: any) => void
    label: string
    type: string
    helper?: string
    placeholder?: string
}
export default function TextArea({ name, value, onChange, type, label, helper, placeholder }: Props) {
    return (
        <FormControl>
            <FormLabel htmlFor={name}>{label}</FormLabel>
            <ChakraTextarea id={name} type={type} onChange={onChange} value={value} placeholder={placeholder} name={name} />
            {helper && (
                <FormHelperText>{helper}</FormHelperText>
            )}
        </FormControl>
    )
}