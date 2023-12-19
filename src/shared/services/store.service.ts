import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Enum representing storage keys used to access data from local storage.
 */
export enum  StorageKey {
    TOKEN_DATA = "tokenData",
    USER_DATA = "userData"
}

/**
 * Retrieves the value associated with the specified key from storage.
 *
 * @param {StorageKey} key - The key to get the value for.
 * @return {Promise<string | null>} - A Promise that resolves with the value associated with the key, or null if the key does not exist.
 */
export async function get(key: StorageKey): Promise<string | null> {
    return  await AsyncStorage.getItem(key);
}

/**
 * Sets the value for a given key in the storage.
 *
 * @param {StorageKey} key - The key to set the value for.
 * @param {string} value - The value to set for the key.
 *
 * @return {Promise<void>} - A promise that resolves when the value is successfully set.
 */
export async function set(key: StorageKey, value: string ): Promise<void> {
    return  await AsyncStorage.setItem(key, value);
}

export default {get,set};