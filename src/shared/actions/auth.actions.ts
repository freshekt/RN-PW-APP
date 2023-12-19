import {router} from "expo-router";
import {StorageKey, default as storage} from "../services/store.service";


/**
 * Checks if the user is authenticated and redirects to the appropriate page.
 * @async
 * @function checkAuth
 * @return {Promise} A promise that resolves with no value.
 */
export const checkAuth = async (): Promise<any> => {
    try {
        const tokenDataStr = await storage.get(StorageKey.TOKEN_DATA);
        
    } catch (e) {
        console.log(e);
    }

}