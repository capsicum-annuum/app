import React, { useEffect } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { ApCheckBox } from 'app-components'
import { useSelector, useDispatch } from 'react-redux'
import { RegisterActions } from 'app-redux'

import Styles from './skills-steps.style'

export const SkillsStep = () => {
  const { skills, skillsList, skillsLoader } = useSelector(
    (state) => state.RegisterReducer,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (skillsList.length === 0) {
      dispatch(RegisterActions.fetchSkillsRequest())
    }
  }, [])

  const selectSkill = (skill, selected) => {
    const skillsSelected = [...skills]

    const newSkills = selected
      ? skillsSelected.filter((s) => s !== skill.id)
      : skillsSelected.concat(skill.id)

    dispatch(RegisterActions.updateUserData({ skills: newSkills }))
  }

  const SkillSelector = () => {
    return (
      <>
        {skillsList.map((skill) => {
          const selected = skills.includes(skill.id)

          return (
            <ApCheckBox
              value={skill}
              key={skill.description}
              label={skill.description}
              onPress={selectSkill}
              selected={selected}
            />
          )
        })}
      </>
    )
  }

  const Loader = () => {
    return (
      <View style={Styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  if (skillsLoader) {
    return <Loader />
  }

  return (
    <ScrollView style={Styles.container}>
      <SkillSelector />
      <View style={Styles.bottomArea} />
    </ScrollView>
  )
}
