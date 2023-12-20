import * as APIUtil from '../utils/APIUtil'
import { ApiConfig } from '../ApiConfig'

export const getDefaultLanguage = () => (
    APIUtil.get(ApiConfig.localization + `/default-language`).then((data) => data['data'])
)
