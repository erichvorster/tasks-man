interface ModalProps {
  content: string;
}
export const Modal = (props: ModalProps) => {
  return (
    <div className={"modalContent"}>
      <span className={"close"}>×</span>
      <p>{props.content}</p>
    </div>
  );
};
