import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {
    const { repositories } = useRepositories();
    
    return (
        <FlatList
            data={repositories}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: props }) => <RepositoryItem {...props} />}
        />
    );
};

export default RepositoryList;
