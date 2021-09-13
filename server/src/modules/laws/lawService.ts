import createBaseService from '../../lib/ServiceBase'
import Law from '../../models/Law'

const ServiceBase = createBaseService<Law>(Law)

class LawService extends ServiceBase {

    // public static async createOrUpdateByUrl(url: string, data: any) {
    //     const law = await Law.findOne({
    //         where: {
    //             url: url
    //         }
    //     })

    //     if (law) {
    //         // await Law.update()

    //         return law
    //     } else {
    //         const newLaw = new Law()
    //         await newLaw.save()
    //         return newLaw
    //     }
    // }
}
export default LawService
