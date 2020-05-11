import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

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

          const touchableStyle = selected
            ? Styles.touchableSelected
            : Styles.touchableUnselected
          const textStyle = selected
            ? Styles.selectedText
            : Styles.unselectedText

          return (
            <TouchableOpacity
              onPress={() => selectSkill(skill, selected)}
              style={touchableStyle}
            >
              <Text style={textStyle}>{skill}</Text>
            </TouchableOpacity>
          )
        })}
      </>
    )
  }

  return (
    <View style={Styles.container}>
      <SkillSelector />
    </View>
  )
}
