import React, { memo } from 'react'
import RefreshIcon from 'assets/images/refresh.svg'
import { Card, Typograph, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'
import { Typography } from 'components/index'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCovidData }){
    const  { cases, recovered, deaths, todayCases, todayDeaths } = data


    const renderCountries =  ( country, index ) => (  
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`Pais-${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )
    
    const textCovid19 = `País: ${country} Total de Casos: ${cases} Casos Hoje: ${todayCases} Total de Mortos: ${todayDeaths} Mortos: ${deaths} Total Recuperados: ${recovered}`
    
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do COVID-19 - ${country}`,
            text: textCovid19,
            url: 'https://www.carlosjunior.com.br/covid19'
        })
    }


    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return(
        <Card>
           <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component='span' color="primary">COVID-19</Typography>
                    <Typography variant="h6" component='span' color="primary">Painel Corona Vírus</Typography>
                    <Typography variant="body2" component='span' color="primary">Atualizado em {updateAt} </Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country} >
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                    {navigatorHasShare ? renderShareButton : renderCopyButton}
                </div>
            </CardPanelContentStyled> 
        </Card>
    )

}

export default memo(Panel)