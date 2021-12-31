import { getData } from "./hooks"

export const checkAdmin = async (token: string) => {
    const res = await getData(`${process.env.SERVER_URL}/api/v1/user/check-admin`, token)
    const response = await res.json()

    if (response.isAdmin) return true
    return false
}
