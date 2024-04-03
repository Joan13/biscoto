import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const InrecTab = () => {
    return (
        <ScrollView style={styles.container}>

            <Text style={{ fontWeight: '800', fontSize: 20, marginVertical: 15, textAlign: 'center' }}>Small quote of speaker 1</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 10 }}>
                <View style={{ margin: 15 }}>
                    <FontAwesome6 name="person-arrow-up-from-line" color="green" size={25} />
                </View>
                <View>
                    <Text style={{ fontWeight: '600', fontSize: 16 }}>Personality Score</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                        <Text style={{ fontWeight: '800', fontSize: 20 }}>8</Text>
                        <Text>/10</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 15 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginBottom: 3 }}>Trust : 7</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '70%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ marginBottom: 3 }}>Sentiment : 2</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '20%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginBottom: 3 }}>Empathy : 5</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '50%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ marginBottom: 3 }}>Charisma : 7</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '70%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginBottom: 3 }}>Trust : 7</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '70%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ marginBottom: 3 }}>Sentiment : 2</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '20%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginBottom: 3 }}>Empathy : 5</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '50%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Text style={{ marginBottom: 3 }}>Charisma : 7</Text>
                        <View style={{ width: '85%', borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 5, height: 13 }}>
                            <View style={{ width: '70%', borderColor: 'rgb(20,200,200)', backgroundColor: 'rgb(20,200,200)', borderWidth: 1, borderRadius: 4, height: '100%' }}></View>
                        </View>
                    </View>
                </View>
            </View>

            <View>
                <Text style={{ marginBottom: 5, marginTop: 20 }}>Quotes reflecting attitude towards me</Text>
                <View style={{ borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 25, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold' }}>Quotes here will be a set of quotes</Text>
                </View>
            </View>

            <View>
                <Text style={{ marginBottom: 5, marginTop: 20 }}>Conclusion</Text>
                <View style={{ borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 25, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold' }}>First speaker mentioned he keeps a healthy lifestyle, but he likes alcohol as well...</Text>
                </View>
            </View>

            <View>
                <Text style={{ marginBottom: 5, marginTop: 20 }}>Favorite topics and interests</Text>
                <View style={{ borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 25, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold' }}>Sport. Speaker mentioned he likes golf...</Text>
                </View>
            </View>

            <View>
                <Text style={{ marginBottom: 5, marginTop: 20 }}>Least favorite topics</Text>
                <View style={{ borderColor: 'rgb(200,200,200)', borderWidth: 1, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 25, backgroundColor: 'white' }}>
                    <Text style={{ fontWeight: 'bold' }}>First speaker mentionned he keeps a healthy lifestyle, but he likes alcohol as well...</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
});

export default InrecTab;