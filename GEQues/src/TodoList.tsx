import { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

import {generateClient} from "aws-amplify/data";
import type {Schema} from "../amplify/data/resource";
import {GraphQLError} from "graphql";
import { fetchUserAttributes } from "aws-amplify/auth";
import { User } from "aws-cdk-lib/aws-iam";
import { Authenticator } from "@aws-amplify/ui-react-native";
import React from "react";


const client = generateClient<Schema>();


const TodoList = () => 
{
    return (
        <View style={styles.container}>
             <Text>The list is here</Text>
         </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 8
    }
})

export default TodoList;