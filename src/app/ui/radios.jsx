export const PendingRadio = ({ onChange }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type="radio"
        id="pending"
        name="status"
        className="radio-input"
        value="pending"
      />
      <label
        htmlFor="pending"
        className="radio-label-pending text-sm flex gap-2 bg-transparent border text-gray-600 items-center cursor-pointer hover:bg-gray-500 hover:text-white"
      >
        Pending
      </label>
    </div>
  );
};

export const InProgressRadio = ({ onChange }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type="radio"
        id="inprogress"
        name="status"
        className="radio-input"
        value="inprogress"
      />
      <label
        htmlFor="inprogress"
        className="radio-label-in-progress text-sm flex gap-2 items-center cursor-pointer hover:text-white hover:bg-yellow-500"
      >
        In progress
      </label>
    </div>
  );
};

export const CompletedRadio = ({ onChange }) => {
  return (
    <div>
      <input
        onChange={onChange}
        type="radio"
        id="completed"
        name="status"
        className="radio-input"
        value="completed"
      />
      <label
        htmlFor="completed"
        className="radio-label-completed text-sm flex gap-2 border cursor-pointer items-center hover:bg-green-500 hover:text-white"
      >
        Completed
      </label>
    </div>
  );
};
