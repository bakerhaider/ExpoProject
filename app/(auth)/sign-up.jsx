import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images} from "../../constants"
import FormField from '../../components/FormField'
import { useState } from 'react'
import CustomButton from "../../components/CustomButton"
import { Link } from "expo-router"


const SignUp = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }
  return (
   <SafeAreaView className="bg-primary h-full">
    <ScrollView>
        <View className="w-full justify-center h-[80vh] px-4 my-6">
            <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />
            <Text  className="text-2xl text-white text-semibold mt-10 font-psemibold">
                Sign up to Ape
            </Text>
            <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e})}
            otherStyles="mt-10"
            
             />
            <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardTypes="email-address"
             />
            <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
        
             />
             <CustomButton title={"Login"} handlePress={submit} containerStyles={"mt-7"} isLoading={isSubmitting} />

             <View className="justify-center pt-5 flex-row gap-2">
                <Text className="text-lg text-gray-100 font-pregular">
                Have an account?
                </Text>
                <Link href={"/sign-in"} className='text-secondary text-lg'>Sign in</Link>
             </View>
        </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SignUp