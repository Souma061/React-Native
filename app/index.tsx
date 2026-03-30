import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import DateSelector from '../components/DateSelector'
import FilterTabs from '../components/FilterTabs'
import Header from '../components/Header'
import TaskCard from '../components/TaskCard'
import Colors from '../constants/colors'
import tasks, { type FilterOption } from '../constants/tasks'
const TodoList = () => {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = React.useState<FilterOption>('todo');
  const filteredTasks = tasks.filter((task) => task.status === activeFilter);
  return (
    <View style={[styles.container,
    {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }
    ]}>
      <StatusBar style="light" />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
        ListHeaderComponent={
          <>
            <Header />
            <DateSelector />
            <FilterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}

      />
    </View>
  )
}

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,

  },
  list: {
    paddingBottom: 16,
  }
})
