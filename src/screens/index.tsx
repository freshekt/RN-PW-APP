import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from "react";
import Dashboard from "./dashboard";
import {useEffect} from "react";
import { router } from 'expo-router';


export default function Home(): React.JSX.Element {



    useEffect(()=>{
        checkAuth().then();
    },[]);

    return  <Dashboard/>;
}