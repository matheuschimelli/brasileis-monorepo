import type { Juris } from '@modules/types'
import { handleJurisprudenciaTJPR } from './handle-jurisprudencia-tjpr'

const handleJurisprudencia = async ({ jobData }: { jobData: Juris }) => {
    if (jobData.tribunal.toUpperCase() == "TJPR") await handleJurisprudenciaTJPR({ jobData })

}

export default handleJurisprudencia