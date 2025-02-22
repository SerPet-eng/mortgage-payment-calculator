import IconEmpty from '../../assets/images/illustration-empty.svg';

export default function EmptyDisplay() {
  return (
    <>
      <div className="empty-display">
        <img className="empty-display-image" src={IconEmpty} alt="Icon Empty" />
        <div className="empty-display-group">
          <p className="empty-display-group-title">Results shown here</p>
          <p className="empty-display-group-text">
            Complete the form and click &apos;calculate repayments&apos; to see
            what your monthly repayments would be.
          </p>
        </div>
      </div>
    </>
  );
}
