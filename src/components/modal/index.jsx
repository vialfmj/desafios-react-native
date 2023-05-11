
import { styles } from './styles'
import { Modal, View, Text, Button } from 'react-native'
import { theme } from '../../constants';

const CustomModal = ({ isVisible, animationType, selectedEvent, onCancel, onDelete}) => {
    return (
        <Modal visible={isVisible} animationType={animationType}>
        <View style={styles.container}>
          <Text style={styles.title}>Task Detail</Text>
          <View style={styles.detailContainer}>
            <Text style={styles.detailMessage}>Do you really want to delete this task?</Text>
            <Text style={styles.selectedEvent}>{selectedEvent?.activity}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button 
              title='Cancel'
              color={theme.secondary}
              onPress={onCancel}
            />
            <Button 
            title='Delete'
            color={theme.secondary}
            onPress={() => onDelete(selectedEvent.id)}
            />
          </View>
        </View>
      </Modal>
    )
};

export default CustomModal