import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecordList from './RecordList';
import Insight from './Insight';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Home = () => {

    const navigation = useNavigation();

    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="Rcords"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName: string;

                        if (route.name === "Records") {
                            return <FontAwesome6 name="floppy-disk" size={size} color={color} />;
                        } else {
                            return <MaterialIcons name="insights" size={size} color={color} />
                        }
                    },
                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "gray",
                    tabBarStyle: {
                        backgroundColor: "white"
                    },
                    tabBarBadgeStyle: { color: '#FFFFFF', backgroundColor: 'rgb(200,20,20)' },
                    tabBarHideOnKeyboard: true,
                    tabBarLabelStyle: {
                        marginBottom: 3,
                        marginTop: -5,
                        fontSize: 11
                    }
                })}>
                <Tab.Screen name="Records" component={RecordList} />
                <Tab.Screen name="Insight" component={Insight} />
            </Tab.Navigator>

            <TouchableOpacity
                onPress={() => navigation.navigate("AudioRecord" as never)}
                style={{
                    position: 'absolute',
                    bottom: 100, right: 20,
                    borderWidth: 1,
                    borderColor: 'green',
                    backgroundColor: 'green',
                    padding: 17,
                    borderRadius: 50,
                    elevation: 5
                }}>
                <Feather name="plus" size={18} color="white" />
            </TouchableOpacity>
        </View>
    );
}

export default Home;

