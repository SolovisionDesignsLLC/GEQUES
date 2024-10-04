import { useState, useEffect } from "react";
import { View, Button, Text, StyleSheet, FlatList } from "react-native";

import {generateClient} from "aws-amplify/data";
import type {Schema} from "../amplify/data/resource";
import {GraphQLError} from "graphql";

const client = generateClient<Schema>();

const TodoList = () => 
{
    return (
        <Text>Test</Text>
    );
};

export default TodoList;