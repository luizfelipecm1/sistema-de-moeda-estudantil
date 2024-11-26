import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const Modal = ({ visible, onHide, title, children }) => (
  <Dialog header={title} visible={visible} style={{ width: '50vw' }} onHide={onHide}>
    {children}
    <Button label="Fechar" icon="pi pi-times" onClick={onHide} className="p-button-secondary" />
  </Dialog>
);

export default Modal;