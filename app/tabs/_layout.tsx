import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#121212' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        headerStyle: { backgroundColor: '#121212' },
        headerTintColor: '#fff'
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="start"
        options={{
          title: 'Quiz',
          tabBarIcon: ({ color, size }) => <Ionicons name="list" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="teoria"
        options={{
          title: 'Teoria',
          tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="storico"
        options={{
          title: 'Storico',
          tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name="impostazioni"
        options={{
          title: 'Impostazioni',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
