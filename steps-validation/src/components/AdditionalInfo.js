import { useNavigate } from "react-router-dom";

export default function AccountInfo({
  basicInfo,
  setBasicInfo,
  excludeButton = false,
}) {
  const navigate = useNavigate();
  const validationLastStep = () => {
    let addressRegex =
      /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
    return basicInfo.phone.length > 7 && addressRegex.test(basicInfo.address);
  };
  return (
    <div>
      <h4>Additional Information</h4>
      <form style={{}}>
        <div>
          <label>adress:</label>
          <input
            value={basicInfo.address}
            type="text"
            placeholder="required adress"
            required
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, address: e.target.value };
              })
            }
          />
        </div>
        <div>
          <label>Phone number:</label>
          <input
            type="number"
            placeholder="ex:35265648"
            required
            value={basicInfo.phone}
            onChange={(e) =>
              setBasicInfo((prev) => {
                return { ...prev, phone: e.target.value };
              })
            }
          />
        </div>

        {!excludeButton && (
          <button
            disabled={!validationLastStep()}
            onClick={() => navigate("/verify")}
          >
            verify my inputs
          </button>
        )}
      </form>
    </div>
  );
}
