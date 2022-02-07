import React, { useEffect, useState, useMemo } from "react";
import { Select as ChakraSelect } from "chakra-react-select";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useData } from "../../lib/hooks";
import { useAuth } from "../../lib/auth";

type Props = {
    name: string;
    value?: any;
    onChange?: (fun: any) => void;
    label: string
    type?: string
    helper?: string
    placeholder?: string
    apiPath: string
    dataLabel: string
    dataValue: string
    isMulti?: boolean
};

export default function SelectMany(props: Props) {
    const { token } = useAuth()

    const { data, error }: { data: any[]; error: any } = useData(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/${props.apiPath}`, token);
    const [selectedValue, setSelectedValue] = useState<any>();

    useEffect(() => {
        console.log("PROPS VALUE", props.value)
    }, [props.value])

    useEffect(() => {
        if (props.onChange) {
            if (selectedValue && selectedValue.length !== 0) {
                props.onChange({
                    id: "selectedValue",
                    persist: () => { },
                    target: {
                        name: props.name,
                        value: selectedValue.map((e: any) => e.id),
                    },
                });
            }

        }

    }, [selectedValue]);

    const selectedOptionMemo = useMemo(() => {

        // if (typeof props.value === "string") {
        //     const foundItem = data.find((e: any) => e.id === props.value);
        //     return [foundItem]
        // }

        if (typeof props.value === "object") {
            if (props.value && props.value.length !== 0) {
                const categories: string[] = props.value

                const val = categories.map((id: any) => {
                    if (id.id) {
                        return data.find((e: any) => e.id === id.id);
                    }
                    return data.find((e: any) => e.id === id);

                });
                return val
            }
        }

    }, [props.value, data]);




    if (data && data.length !== 0) {
        return (
            <FormControl>
                <FormLabel>{props.label}</FormLabel>
                <ChakraSelect
                    isMulti
                    placeholder={props.placeholder}
                    colorScheme="gray"
                    selectedOptionStyle="check"
                    focusBorderColor="gray.800"
                    options={data}
                    getOptionLabel={(label: any) => label[props.dataLabel]}
                    getOptionValue={(value: any) => value[props.dataValue]}
                    onChange={(value: any) => setSelectedValue(value)}
                    value={selectedOptionMemo}
                />
            </FormControl>
        );
    }
    return <>loading</>;
}