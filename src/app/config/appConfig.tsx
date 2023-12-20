import flagKR from 'src/assets/images/icon/flag/KR.svg'
import flagVN from 'src/assets/images/icon/flag/VN.svg'
import flagUS from 'src/assets/images/icon/flag/US.svg'

interface IPaginationConfig {
  pageSize: number
  mobilePageSize: number
  initCurrentPage: number
  perPageOptions: number[]
}

export const paginationConfig: IPaginationConfig = {
  pageSize: 10,
  mobilePageSize: 5,
  initCurrentPage: 0,
  perPageOptions: [5, 10, 15],
}

export const getImgFlag = (code: string) => {
  switch (code) {
    case 'vn':
      return <img src={flagVN} alt='' className={'flag'} width={'25px'} style={{ marginRight: '5px' }} />

    case 'ko':
      return <img src={flagKR} alt='' className={'flag'} width={'25px'} style={{ marginRight: '5px' }} />

    case 'en':
      return <img src={flagUS} alt='' className={'flag'} width={'25px'} style={{ marginRight: '5px' }} />

    default:
      return <img src={flagVN} alt='' className={'flag'} width={'25px'} style={{ marginRight: '5px' }} />
  }
}

export const appConfig = {
  defaultLanguage: 'en',
  defaultCurrency: 'VND',
}
