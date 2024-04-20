import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { icons } from "../constants"

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setshowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100">{title}</Text>
      <View className="w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl items-center focus:border-secondary-100 flex-row">
        <TextInput className="flex-1 text-white font-psemibold text-base" value={value} placeholder={placeholder} placeholderTextColor={"#7b7b8b"} onChangeText={handleChangeText} secureTextEntry={title === "Password" && !showPassword} />
        {title === "Password" && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode='contain' />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField