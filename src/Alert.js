const Alert = ({ message, onClose }) => (
  <div className="alert-container">
    <span className="alert-message">{message}</span>
    <button className="alert-close" onClick={onClose}>×</button>
  </div>
);

export default Alert;