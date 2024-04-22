import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite"

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.project.ape",
    projectId: "66129492374d1f7cefe6",
    databaseId: "662649d063ae2db07f0a",
    userCollectionId: "662649f97253a7900dce",
    videosCollectionId: "66264a1d5fc5d050246c",
    storageId: "66264b66ce850d53b165",
}

const client = new Client()


client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId).setPlatform(appwriteConfig.platform)

const account = new Account(client)
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email, password, username) => {
   try {
    const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
    )

    if (!newAccount) throw Error

    const avatarUrl = avatars.getInitials(username)
    await signIn(email, password)
    const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
            accountId: newAccount.$id,
            email,
            username,
            avatar: avatarUrl
        }
    )

    return newUser
   } catch (error) {
    console.log(error);
    throw new Error(error)
   }
}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailSession(email, password)
        return session
    } catch (error) {
        
    }
}