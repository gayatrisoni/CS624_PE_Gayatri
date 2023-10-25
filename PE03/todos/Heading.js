import Recat from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Heading = () => (
    <View style={styles.header}>
        <Text style = {styles.headerText}>todos</Text>
    </View>
);

const styles = StyleSheet.create({
    header: {
        marginTop : 80,
    },

    headerText: {
        textAlign : 'center',
        fontSize : 72,
        color : 'rgba(172, 47, 47, 0.25)',
        fontWeight : '300',
    },
})

export default Heading;