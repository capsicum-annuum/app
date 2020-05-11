import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { ApCheckBox } from 'app-components'

import Styles from './causes-step.style'

// TODO buscar as causas do serviço

const causes = [
  'Saúde',
  'Esportes',
  'Jovens',
  'Idosos',
  'Crianças',
  'Proteção Animal',
  'Sustentabilidade',
  'LGBTQ+',
  'Cidadania',
  'Combate à Pobreza',
  'Meio Ambiente',
  'Educação',
]

export const CausesStep = () => {
  const [causesSelected, setCausesSelected] = useState('Saúde')

  const selectCause = (cause, selected) => {
    const causesList = [...causesSelected]

    const newCauses = selected
      ? causesList.filter((c) => c !== cause)
      : causesList.concat(cause)

    setCausesSelected(newCauses)
  }

  const CausesItems = () => {
    return (
      <>
        {causes.map((cause) => {
          const selected = causesSelected.includes(cause)

          return (
            <ApCheckBox
              onPress={selectCause}
              label={cause}
              selected={selected}
            />
          )
        })}
      </>
    )
  }

  return (
    <ScrollView style={Styles.container}>
      <CausesItems />
      <View style={Styles.bottomArea} />
    </ScrollView>
  )
}
