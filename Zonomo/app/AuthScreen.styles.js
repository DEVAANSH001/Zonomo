import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  inputContainer: {
    backgroundColor: '#111',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: 'white',
    marginLeft: 10,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 8,
  },
  label: {
    color: 'white',
  },
  link: {
    color: '#3b82f6',
    fontWeight: '500',
  },
  primaryBtn: {
    backgroundColor: '#3b82f6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryBtnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  secondaryBtn: {
    borderColor: 'white',
    borderWidth: 1,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  secondaryBtnText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  rowDoubleInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 15,
  },
  legal: {
    color: 'white',
    marginTop: 10,
  },
});

export default styles;
