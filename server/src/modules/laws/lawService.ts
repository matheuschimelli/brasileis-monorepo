import createBaseService from '../../lib/ServiceBase'
import Law from '../../models/Law'

const LawService = createBaseService<Law>(Law)

export default LawService
