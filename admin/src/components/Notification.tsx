interface NotificationProps {
  text: string;
  type: string;
}

const Notification = ({ text, type }: NotificationProps) => {
  return (
    <div id="toasts">
      <div className={`toast ${type}`}>{text}</div>
    </div>
  );
};

export default Notification;
