import { RiDeleteBin6Line } from 'react-icons/ri';

const Note = () => {
  return (
    <div className="note">
      <span>Hello! This is our first note!</span>
      <div className="note-footer">
        <small>14/02/2023</small>
        <RiDeleteBin6Line className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
};
export default Note;