import { useState } from 'react'
import useSWR from 'swr'
import { useAuth } from './auth'
type MutationType = 'POST' | 'GET' | 'PUT' | 'DELETE'


export async function getData(url: string, token: string) {

    const response = await fetch(url, {
        method: 'GET',

        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    })
    return response
}
export function useData(url: string) {
    const fetcher = (urlToFetch: string) => fetch(urlToFetch).then(r => r.json())

    const { data, error } = useSWR(url, fetcher)
    return { data, error }
}

export const useForm = (formType: any) => {
    const [form, setFormData] = useState(formType);

    const handleSubmit = (event: any) => {
        if (event) {
            event.preventDefault();
        }
    };
    const handleInputChange = (event: any) => {
        event.persist();
        setFormData((form: any) => ({
            ...form,
            [event.target.name]: event.target.value,
        }));
    };

    const initFormData = (data: any) => {
        setFormData(data)
    };
    return {
        initFormData,
        form,
        handleSubmit,
        handleInputChange,
    };
};

export const useMutate = () => {
    const [loading, setLoading] = useState<any[]>([])
    const [success, setSuccess] = useState<boolean | undefined>(undefined)
    const [response, setResponse] = useState<string | any>()
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)


    const mutate = async (id: any, mutationType: MutationType, url: string, formData?: any, token?: any) => {
        let isLoading = loading.slice();
        isLoading[id] = true;

        setLoading(isLoading)
        setSuccess(false)
        setErrorMessage(undefined)
        setErrorMessage(undefined)

        console.log(`TOKEN HOOK ${token}`)

        try {
            const response = await fetch(url, {
                method: mutationType,

                body: JSON.stringify({
                    ...formData
                }),
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                // headers: new Headers({
                //     'Content-Type': 'application/json',
                //     Accept: 'application/json',
                //     Authorization: `Bearer ${token}`
                //     // ...(token && { Authorization: `Bearer ${token}` }),
                // }),
            })
            if (!response.ok) {

                isLoading[id] = false;
                setLoading(isLoading)
                setSuccess(false)
                setErrorMessage(`Erro ${response.statusText}`)
                setResponse(response.statusText)
                return { response }
            }

            isLoading[id] = false;
            setLoading(isLoading)
            setSuccess(true)
            setResponse(response.statusText)
            return { response }
        } catch (error: any) {
            isLoading[id] = false;
            setLoading(isLoading)
            setErrorMessage(error)
            setSuccess(false)
            setResponse(response.statusText)
            return { error }
        }

    }

    return {
        loading, errorMessage, mutate, response, success
    }
};