import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/colors';
import { Task } from '../constants/tasks';
import type { ComponentProps } from 'react';

const STATUS_COLORS = {
  'todo': '#FF6B6B',
  'in-progress': '#FFD93D',
  'done': '#6BCB77',
} as const;

const CATEGORY_ICON_COLORS: Record<Task['category'], string> = {
  Work: '#5B8CFF',
  Personal: '#FF7A59',
  Study: '#7C5CFC',
  Health: '#34C759',
  Home: '#FFB020',
  Finance: '#00B8A9',
};

type IoniconName = ComponentProps<typeof Ionicons>['name'];

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({ task }: TaskCardProps) => {
  const iconBackgroundColor = CATEGORY_ICON_COLORS[task.category] ?? Colors.primary;

  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Text style={styles.category}>{task.category}</Text>
        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.footer}>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={14} color={Colors.primary} />
            <Text style={styles.time}>{task.time}</Text>
          </View>

          <Text style={[styles.status, { color: STATUS_COLORS[task.status] }]}>
            {task.status}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.iconBadge,
          { backgroundColor: iconBackgroundColor },
        ]}
      >
        <Ionicons name={task.icon as IoniconName} size={18} color="#FFFFFF" />
      </View>
    </View>
  )
}


export default TaskCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  time: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "500",
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 14,
  },
});
