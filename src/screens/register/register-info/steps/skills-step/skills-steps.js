import React, { useState } from 'react'
import { View, ScrollView } from 'react-native'
import { ApCheckBox } from 'app-components'

import Styles from './skills-steps.style'

//  TODO buscar skills no serviço

const skills = [
  'Artes/Trabalho Manual',
  'Comunicação',
  'Idiomas',
  'Saúde',
  'Dança/Música',
  'Educação',
  'Computadores/Tecnologia',
  'Direito',
  'Agilidade',
  'Organização',
  'Gerenciamento',
  'Esportes',
  'Cozinha',
  'Outros',
]

export const SkillsStep = () => {
  const [skillsSelected, setSkillsSelected] = useState(['Outros'])

  const selectSkill = (skill, selected) => {
    const skillsList = [...skillsSelected]

    const newSkills = selected
      ? skillsList.filter((s) => s !== skill)
      : skillsList.concat(skill)

    setSkillsSelected(newSkills)
  }

  const SkillSelector = () => {
    return (
      <>
        {skills.map((skill) => {
          const selected = skillsSelected.includes(skill)

          return (
            <ApCheckBox
              onPress={selectSkill}
              label={skill}
              selected={selected}
            />
          )
        })}
      </>
    )
  }

  return (
    <ScrollView style={Styles.container}>
      <SkillSelector />
      <View style={Styles.bottomArea} />
    </ScrollView>
  )
}
