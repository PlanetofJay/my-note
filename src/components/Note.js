import { RiDeleteBin6Line } from 'react-icons/ri';

const Note = ({ id, text, date }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <RiDeleteBin6Line className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
};
export default Note;