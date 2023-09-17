import React from "react";
import { StyleSheet, SectionList, SafeAreaView, Text, View } from "react-native";

const style = StyleSheet.create({
    row: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },

    name: {fontSize: 16},

    seperator:{
        backgroundColor:"black",
        height: 1
    },

    sectionHeader: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "rgb(170,170,170)"
    },
}); 

const groupPeopleByLastName = (_data) => {
    const data = [..._data]
    const groupData = data.reduce((acumulator, item) => {
        const group = item.name.last[0].toUpperCase();
        if (acumulator[group]){
            acumulator[group].data.push(item);
        }
        else {
            acumulator[group] = {
                title: group,
                data: [item],
            };
        }
        return acumulator;
    }, {});

    const sections = Object.keys(groupData).map((key) =>{
        return groupData[key]
    });

    return sections.sort((a,b) => {
        if (a.title > b.title)
            return 1;
        else return -1;
    });

};


export default () =>{
    return (
        <SafeAreaView>
            <SectionList
                sections={groupPeopleByLastName(PEOPLE)}
                keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
                renderSectionHeader={({ section }) => {
                    return (
                        <View style={style.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    );
                }}
                renderItem={({ item }) => {
                    return (
                        <View style={style.row}>
                            <Text style={style.name}>{item.name.first}{item.name.last}</Text>
                        </View>
                    );
                }}
                ItemSeparatorComponent={() => <View style={style.seperator} />}
            />

        </SafeAreaView>

    )
}


const PEOPLE =[
    {
    name: {
        title:"Ms",
        first:"Widd",
        last:"MMMMAAA"
    }
},
{
    name: {
        title:"Ms",
        first:"Octupus",
        last:"Tentacle"
    }
},
{
    name: {
        title:"Mr",
        first:"John",
        last:"Kenedy"
    }
}]