import reactDom from 'react-dom';

export default function ModalPortal({ children }) {
  if (typeof window === 'undefined') {
    return null;
  }

  const node = document.getElementById('portal') 
  return reactDom.createPortal(children, node);
}
